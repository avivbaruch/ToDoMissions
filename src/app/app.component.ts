import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <div>
          <panel user='Dana'>
          </panel>
        </div>
        <div>
        <panel user='David'>
          </panel>
          </div>
  `,
  styles:[`
        div
        {
          display:inline-block;
          border:3px solid green;
          margin:10px;
        }
  `]
  
})
export class AppComponent {
  constructor(){
  }
}
