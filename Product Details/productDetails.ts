import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  
  constructor(){}
  title = 'angularAssignment1';
  persons = [

  ];
 
  Id:number;
  Product: String;
  Description:String;
  Cost:String;
  
  add(Id,Product,Description,Cost){
    this.persons.push({
      "Id":Id,
      "Product": Product,
      "Description":Description,
      "Cost":Cost
      
    });

    // resetting the input field
   
    this.Id = undefined;
    this.Product = "";
    this.Description="";
    this.Cost="";
  }
  ngOnInit(): void {
    
  }
}
