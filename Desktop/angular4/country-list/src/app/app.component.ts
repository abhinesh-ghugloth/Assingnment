import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'app';
private gridApi;
private gridColumnApi;
private columnDefs;
private sortingOrder;
constructor(private http:HttpClient){
  this.columnDefs = [
    {headerName: 'Athlete', field: 'athlete',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Age', field: 'age',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Country', field: 'country',width:150,sortingOrder:["desc","asc"] },
    {headerName: 'Year', field: 'year',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Date', field: 'date',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Sport', field: 'sport',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Gold', field: 'gold',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Silver', field: 'silver',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Brooze', field: 'brooze',width:150,sortingOrder:["asc","desc"] },
    {headerName: 'Total', field: 'total',width:150,sortingOrder:["asc","desc"] },
];
this.sortingOrder=["desc","asc"]
}

onGridReady(params){
  this.gridApi=params.api;
  this.gridColumnApi=params.columnApi;
  // let dataValue=[{"firstName":"abhinesh","age":22},{"firstName":"Abhinesh Ghugloth","age":30}]
  this.http.get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
  .subscribe(data=>{
    params.api.setRowData(data);
  })
 
}

}

    // columnDefs = [
    //     {headerName: 'Name', field: 'make' },
    //     {headerName: 'Model', field: 'model' },
    //     {headerName: 'Price', field: 'price'}
    // ];

    // rowData = [
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];
    