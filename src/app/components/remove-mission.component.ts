import { Component, Input } from "@angular/core";
import { MissionsService } from "../services/missions.service";
@Component({
    selector:'remove-mission',
    template:`
            <i
                 (click)="removeMission()" 
                 style="float:right;"
                 class="fa fa-trash"
            >
        </i>
    `
})
export class RemoveMissionComponent
{
    @Input()  mission:string='';
    constructor(public dataService:MissionsService){
    }
    removeMission(){
        this.dataService.removeMission(this.mission);            
    }
}