import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedRanger:number=0;

  public rangers:any=[
    {
      id:1,
      rangerName:'Conner McKnight',
      rangerType:'Red Dhino Ranger'
    },
    {
      id:2,
      rangerName:'Kira Ford',
      rangerType:'Yellow Dhino Ranger'
    },
    {
      id:3,
      rangerName:'Ethan James',
      rangerType:'Blue Dhino Ranger'
    }
  ];
  Str:String=''
  log(id:number)
  {
    for(var r of this.rangers)
    {
      if(r.id===+id)
      {
          this.Str=`You have opted ${r.rangerType} `;
      }
    }
   }
}
