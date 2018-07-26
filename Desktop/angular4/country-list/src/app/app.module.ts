import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { PadinationDemoComponent } from './padination-demo/padination-demo.component';
import { Input } from '@angular/core/src/metadata/directives';

const routs:Routes=[
  {path:"padinationdemo",component:PadinationDemoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PadinationDemoComponent,
    // MyGridApplicationComponent,
    // RedComponentComponent,
  ],
  imports: [
    BrowserModule,AgGridModule.withComponents([]),HttpClientModule,RouterModule.forRoot(routs),
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
