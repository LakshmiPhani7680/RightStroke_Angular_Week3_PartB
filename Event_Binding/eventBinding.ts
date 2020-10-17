import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }
  text:string;
  ngOnInit(): void {
  }
  name:any='';
  onKey(event:any){
    this.name=event.target.value;
  }

  value:any='';
  onEnter(value:string){
    this.value=value;
  }
  
  val:any='';
  onEnterShift(key:string){
    this.val=key;
  }
  onSubmit(){
    alert("Hello!!!!");
  }
}
