import { Component } from "@angular/core";
import { MissionsService } from "../services/missions.service";

@Component({
    selector:'add-mission',
    template:`
        <input type="text"
             (keydown)="fixFirstLetter($event)"
          style="width:400px; color:red;font-size:24px;"
             (keyup.enter) ="addMission($event.target.value);
             $event.target.value=''"   
          />
    `
})
export class AddMissionComponent
{

    fixFirstLetter(event:any){
        if(event.target.value.length==1)
           event.target.value=event.target.value.toUpperCase();
    }

    keyuphandler(event:any){
        console.log(event.target.value);
    }

   
    constructor(public service:MissionsService ){

    }

    addMission(missionToAdd:string){
        this.service.addMission(missionToAdd);
    }
}
