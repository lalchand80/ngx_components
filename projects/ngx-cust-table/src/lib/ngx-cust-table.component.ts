import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-cust-table',
  templateUrl: './ngx-cust-table.component.html',
  styleUrls: ['./ngx-cust-table.component.scss']
})
export class NgxCustTableComponent implements OnInit {

  @Input('tableOptions') tableOptions: any[];
  @Input('tableData') tableData: any[];
  @Input('sorting') sorting: boolean = false;
  @Input('colFilter') colFilter: boolean = false;
  @Input('gblSearch') gblSearch: boolean = false;
  @Input('colSearch') colSearch: boolean = false;
  @Input('paginationFlag') paginationFlag: boolean = false;
  @Output() onTableAction: EventEmitter<any> = new EventEmitter();

  public tableCols;
  public tableColsBkp;
  public tableColsDropDown;
  public tableDataBkp: any;
  public selectAllFlag: boolean = true;
  public searchOnOff: boolean = false;
  public showFilterBox: boolean = false;
  public config = {
    itemsPerPage: 10,
    currentPage: 1,
  };
  public gblSearchText = "";
  public paging = [10, 20, 30];

  constructor() { }

  ngOnInit() {
    if (this.tableOptions != undefined && this.tableData != undefined 
      && this.tableOptions.length > 0 && this.tableData.length > 0) {
      //bkp col and table data
      this.tableCols = _.cloneDeep(this.tableOptions);
      this.tableColsBkp = _.cloneDeep(this.tableCols);
      this.tableColsDropDown = _.cloneDeep(this.tableCols);

      //By default select all columns
      this.tableColsDropDown.forEach(col => {
        col.selected = true;
      });

      this.tableData.filter(item => {
        item.active = false;
        if (item["children"] != undefined) {
          item.children.filter(subItem => {
            subItem.active = false;
          })
        }
      });

      this.tableDataBkp = _.cloneDeep(this.tableData);
    }
  }

  showMinorData(i: any) {
    this.tableData[i].active = !this.tableData[i].active;
  }

  showSubMinorData(i: any, j: any) {
    this.tableData[i].children[j].active = !this.tableData[i].children[j].active;
  }

  changeAllSelection(event) {
    const checked = event.target.checked;
    this.selectAllFlag = checked;
    this.tableColsDropDown.forEach(col => {
      col.selected = checked;
    });
  }

  changeColSelection(headerName, event) {
    debugger
    const checked = event.target.checked;
    this.tableColsDropDown.find(col => col.headerName == headerName).selected = checked;
    this.checkIfAllColSelected();
  }

  checkIfAllColSelected() {
    let colData = this.tableColsDropDown.find(col => col.selected == false);
    if (colData == undefined) {
      this.selectAllFlag = true;
    } else {
      this.selectAllFlag = false;
    }
  }
  showFilterContainer() {
    this.showFilterBox = !this.showFilterBox;
  }
  applyFilter() {
    if (this.selectAllFlag) {
      //reset columns and data on all select
      this.tableCols = _.cloneDeep(this.tableColsBkp);
      this.tableData = _.cloneDeep(this.tableDataBkp);
    } else {
      let removedCols = _.filter(this.tableColsDropDown, { 'selected': false });

      //Atleast 3 columns must be selected
      if (removedCols.length <= this.tableColsDropDown.length - 3) {
        //reset columns and data on all select
        this.tableCols = _.cloneDeep(this.tableColsBkp);
        this.tableData = _.cloneDeep(this.tableDataBkp);

        removedCols.forEach(col => {
          _.remove(this.tableCols, { 'headerName': col.headerName });
          this.tableData.forEach(listCol => {
            if (listCol.hasOwnProperty(col.field)) {
              delete listCol[col.field];
            }

            if (listCol.hasOwnProperty('children')) {
              this.deleteFromChildrenArray(listCol['children'], col.field);
            }
          });
        });
      } else {
        alert('Atleast 3 columns must be selected!')
      }
    }
  }

  deleteFromChildrenArray(childrenArray, colName) {
    childrenArray.forEach(childElement => {
      if (childElement.hasOwnProperty(colName)) {
        delete childrenArray[colName]
      }

      if (childElement.hasOwnProperty('children')) {
        this.deleteFromChildrenArray(childElement['children'], colName);
      }
    });
  }

  sortData(columnData) {
    //toggle sort direction
    columnData.sortDirection = columnData.sortDirection === 'asc' ? 'desc' : 'asc';
    console.log(columnData);

    if (columnData.type == 'date') {
      return this.tableData.sort((a, b) => {
        let adateArr = a[columnData.field].split("-");
        let bdateArr = b[columnData.field].split("-");
        let aDate = new Date(adateArr[0], adateArr[1], adateArr[2]).getTime();
        let bDate = new Date(bdateArr[0], bdateArr[1], bdateArr[2]).getTime();

        if (columnData.sortDirection === 'asc') {
          return aDate > bDate ? 1 : aDate < bDate ? -1 : 0
        } else {
          return aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
        }
      });
    } else if (columnData.type == 'string') {
      return this.tableData.sort((a, b) => {
        if (a[columnData.field] != null && b[columnData.field] != null) {
          let valA = a[columnData.field].toLowerCase();
          let valB = b[columnData.field].toLowerCase();

          if (columnData.sortDirection === 'asc') {
            return valA > valB ? 1 : valA < valB ? -1 : 0
          } else {
            return valA < valB ? 1 : valA > valB ? -1 : 0;
          }
        }
      });
    } else if (columnData.type == 'number') {
      return this.tableData.sort((a, b) => {
        let valA = +a[columnData.field];
        let valB = +b[columnData.field];

        if (columnData.sortDirection === 'asc') {
          return valA - valB;
        } else {
          return valB - valA;
        }
      });
    }
  }

  getPageDetails(): string {
    let count = this.tableData.length;
    return `${(this.config.currentPage * this.config.itemsPerPage + 1) - this.config.itemsPerPage} to ${Math.min(this.config.currentPage * this.config.itemsPerPage, count)} of ${count}`;
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  toggleSearchFilter() {
    if (this.searchOnOff) {
      //clear all search texts
      this.tableCols.forEach(col => {
        col.searchText = '';
      });

      //clear gbl search text
      this.gblSearchText = '';

      //reset table data
      this.tableData = _.cloneDeep(this.tableDataBkp);
    }
    this.searchOnOff = !this.searchOnOff;
  }

  startSearch(gblSearchText) {
    let searchCols = this.tableCols.filter(col => {
      return col.searchText.length > 0;
    });

    if (gblSearchText != '' && searchCols.length > 0) {
      //apply global and column wise search combinely
      this.tableData = this.globalSearch(gblSearchText, _.cloneDeep(this.tableDataBkp), this.tableCols);
      this.tableData = this.columnWiseSearch(this.tableData, searchCols);
    } else if (gblSearchText != '' && searchCols.length == 0) {
      //apply only global search
      this.tableData = this.globalSearch(gblSearchText, _.cloneDeep(this.tableDataBkp), this.tableCols);
    } else if (gblSearchText == '' && searchCols.length > 0) {
      //apply only column wise search
      this.tableData = this.columnWiseSearch(_.cloneDeep(this.tableDataBkp), searchCols);
    } else {
      //restore table data
      this.tableData = _.cloneDeep(this.tableDataBkp);
    }
  }

  globalSearch(gblSearchText, tableData, colData) {
    return tableData.filter(item => {
      return colData.some((col) => {
        return new RegExp(gblSearchText, 'gi').test(item[col.field]) || gblSearchText === "";
      });
    });
  }

  columnWiseSearch(tableData, filteredColData) {
    return tableData.filter(item =>
      filteredColData.reduce((memo, col) =>
        (memo && new RegExp(col.searchText, 'gi').test(item[col.field])) || col.searchText === "", true));
  }

}
