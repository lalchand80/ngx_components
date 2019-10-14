import { Component } from '@angular/core';

@Component({
  selector: 'cust-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgxCustTableLibrary';

  private tableOptions =  [
    {
      headerName: "Column 1",
      field: "col1",
      width: 100,
      sortDirection: "asc",
      type: "number",
      searchText: "",
      cellRenderer: "agGroupCellRenderer"
    },
    {
      headerName: "Column 2",
      field: "col2",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 3",
      field: "col3",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 4",
      field: "col4",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 200
    }, {
      headerName: "Column 5",
      field: "col5",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    }, {
      headerName: "Column 6",
      field: "col6",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 200
    },
    {
      headerName: "Column 7",
      field: "col7",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 8",
      field: "col8",
      sortDirection: "asc",
      type: "date",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 9",
      field: "col9",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 10",
      field: "col10",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 11",
      field: "col11",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 12",
      field: "col12",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 13",
      field: "col13",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 14",
      field: "col14",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Column 15",
      field: "col15",
      sortDirection: "asc",
      type: "date",
      searchText: "",
      width: 100
    }
  ]

private listData = [
  {
    "col1": "1",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2017-08-11",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text",
    "children": [
      {
        "col1": "11",
        "col2": "sample text",
        "col3": "sample text",
        "col4": "col text",
        "col5": "col text",
        "col6": "sample text",
        "col7": "sample text",
        "col8": "2018-08-12",
        "col9": "sample text",
        "col10": "sample text",
        "col11": "sample text",
        "col12": "sample text",
        "col13": "sample text",
        "col14": "sample text",
        "col15": "sample text",
        "children": [
          {
            "col1": "111",
            "col2": "sample text",
            "col3": "sample text",
            "col4": "col text",
            "col5": "col text",
            "col6": "sample text",
            "col7": "sample text",
            "col8": "2019-08-12",
            "col9": "sample text",
            "col10": "sample text",
            "col11": "sample text",
            "col12": "sample text",
            "col13": "sample text",
            "col14": "sample text",
            "col15": "sample text"
          }
        ]
      }
    ]
  },
  {
    "col1": "2",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-13",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "3",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-14",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "4",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-18",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "5",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-5",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "6",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-6",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "7",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-7",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "8",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-2",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "9",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-19",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "10",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-10",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "11",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-11",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "12",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-12",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  },
  {
    "col1": "13",
    "col2": "sample text",
    "col3": "sample text",
    "col4": "col text",
    "col5": "col text",
    "col6": "sample text",
    "col7": "sample text",
    "col8": "2018-08-13",
    "col9": "sample text",
    "col10": "sample text",
    "col11": "sample text",
    "col12": "sample text",
    "col13": "sample text",
    "col14": "sample text",
    "col15": "sample text"
  }
]
}
