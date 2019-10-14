# NgxCustTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.9.

* A simple reusable table component with filter, sort, search and pagination.
* Only need to provide column options and actual data with extra fields like true or false for pagination, filter, sort and search functinality.
* Ease to use and customize as per requirement.
* Input must be provided in required format.
* Easy to integrate in any angular project.

## Development server (Examples/Demo)
Example can be found under src/app directory of this repository. 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installation
`npm i ngx-cust-table`

### @Inputs()
#### 1) tableOptions : REQUIRED
* It's an array of json objects of following fields required to configure table headers:

```typescript
[
    {
      headerName: "Column 1",   //Column header name
      field: "col1",  //Actual JSON key of respective column to display data into table
      width: 100,  //Column width
      sortDirection: "asc",  //Sort direction
      type: "number",  //Data type of column (other types are: string and date)
      searchText: "",  //Used for global search
      cellRenderer: "agGroupCellRenderer"
    },
    {
      headerName: "Column 2",
      field: "col2",
      width: 100,
      sortDirection: "asc",
      type: "string",
      searchText: "",
      cellRenderer: "agGroupCellRenderer"
    }
]    
```

#### 2) tableData : REQUIRED
* It's an array of json objects of actual data that is getting displyed in table rows:
* It also has optiona children array if you need to display sub items as accordians.

```typescript
[
  {
    "col1": "1", //Column 1 data
    "col2": "sample text", //Column 2 data
    "col3": "sample text",
    "col4": "col text",
    "children": [  //sub data array if you want to use accordians. It's optional.
      {
        "col1": "11",
        "col2": "sample text",
        "col3": "sample text",
        "col4": "col text",
        "children": [
          {
            "col1": "111",
            "col2": "sample text",
            "col3": "sample text",
            "col4": "col text",
          }
        ]
      }
    ]
  }
]    
```
#### 3) sorting : REQUIRED
* True or False to enable/disabled sorting.

#### 4) colFilter : REQUIRED
* True or False to enable/disabled column filter like hide/show different columns.

#### 5) gblSearch : REQUIRED
* True or False to enable/disabled global text search.

#### 6) colSearch : REQUIRED
* True or False to enable/disabled per column or combine column searching.

#### 7) paginationFlag : REQUIRED
* True or False to enable/disabled pagination for table.

## Usage

1) Register the `NgxCustTableModule` in your app module.
 > `import { NgxCustTableModule } from 'ngx-cust-table';`

 ```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxCustTableModule } from 'ngx-cust-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCustTableModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

 2) Provide the required data for `(NgxCustTableLibrary)` in your component.

```typescript
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
    ...
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
  }
  ...
]
}
```

3) Add the component selector `<ngx-cust-table> </<ngx-cust-table>` in your html.

 ```typescript
<div style="padding: 20px; margin: 30px;">
  <ngx-cust-table
    [tableOptions]="tableOptions" 
    [tableData]="listData"
    [sorting]="true"
    [colFilter]="true"
    [gblSearch]="true"
    [colSearch]="true"
    [paginationFlag]="true">
  </ngx-cust-table>
</div>
 ```

## Running the example in local env

#### Following peer dependecies must be installed in your application to use this component smoothly

```typescript
"peerDependencies": {
    "@angular/common": "^8.2.9",
    "@angular/core": "^8.2.9",
    "ngx-pagination": "4.1.0",
    "bootstrap": "^4.3.1",
    "font-awesome": "^4.7.0",
    "lodash": "^4.17.15"
  }
```

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the NgxCustTable module
If you want to customize it your way, you can edit it from projects folder. Once changes are done, excute command `ng build NgxCustTable` to build library first then `ng serve` the application.

Run `ng build NgxCustTable` to build the library. The build artifacts will be stored in the `dist/ngx-cust-table` directory.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Publishing

After building your library with `ng build NgxCustTable`, go to the dist folder `cd dist/ngx-cust-table` and run `npm publish`.

## Running unit tests

Run `ng test NgxCustTable` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
