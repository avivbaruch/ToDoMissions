import { Component } from "@angular/core";
import { MissionsService } from "../services/missions.service";

@Component({
    selector:'missions-list',
    template:`
      <ul class="list-group" 
         style="min-height:370px;max-height:370px;overflow:auto">
        <li style="cursor:pointer; width:400px; font-size:26px;"
         (click)="changeActive(idx)" 
        class="list-group-item {{activeIndex==idx?'active':''}}" 
        *ngFor="let mission of dataService.getAllMissions();
        let idx=index">
             {{mission}} 
                  <remove-mission [mission]="mission"></remove-mission>
             </li>
      </ul>
    `
})
export class MissionsList
{
  changeActive(index:number){
      this.activeIndex= index; 
  }
    activeIndex:number=0;
    constructor(public dataService:MissionsService){
    }

}