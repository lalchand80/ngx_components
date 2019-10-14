import { NgModule } from '@angular/core';
import { NgxCustTableComponent } from './ngx-cust-table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [NgxCustTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [NgxCustTableComponent]
})
export class NgxCustTableModule { }
