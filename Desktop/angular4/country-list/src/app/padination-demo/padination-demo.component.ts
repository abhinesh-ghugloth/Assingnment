import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padination-demo',
  templateUrl: './padination-demo.component.html',
  styleUrls: ['./padination-demo.component.css']
})
export class PadinationDemoComponent implements OnInit {
  collections=[];
  constructor() { 
    for(let i=1;i<=100;i++){
      this.collections.push('Angular ${i}.0');
      console.log(this.collections)
    }
  }

  ngOnInit() {
  }

}
