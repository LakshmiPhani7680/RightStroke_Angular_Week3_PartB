import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creditcard';

  Rangers=[
    {id:1,fname:"RedRanger"},
    {id:2,fname:"BlueRanger"},
    {id:3,fname:"GreenRanger"}
  ];
}
