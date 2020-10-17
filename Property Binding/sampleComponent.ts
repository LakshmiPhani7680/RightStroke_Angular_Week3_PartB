import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  
  constructor(){}
  @Input()
  public value1:String;

  ngOnInit(): void {
    
  }
}
