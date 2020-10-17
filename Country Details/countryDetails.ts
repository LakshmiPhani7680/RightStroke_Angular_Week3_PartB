import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  
  constructor(){}
  title = 'angularAssignment1';
  k:number=0
  countries=[
    {Id:1,Country:"India"},
    {Id:2,Country:"US"},
    {Id:3,Country:"UK"},
]
  ngOnInit(): void {
    
  }
}
