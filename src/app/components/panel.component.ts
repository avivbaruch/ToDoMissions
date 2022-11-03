import { Component, Input } from "@angular/core";
import { MissionsService } from "../services/missions.service";

@Component({
   selector:'panel',
   template:`
        <div class="w3-container w3-teal">
        <h1>{{user}}'s missions</h1>
        </div>
        <div class="w3-container" style="padding:10px; margin:10px;">
            <h4> Following {{user}}'s  missions:  </h4>
            <br>
            <add-mission></add-mission>
            <hr />
            <missions-list></missions-list>
            <br>
            <save-db></save-db>
        </div>
   `,
   providers:[MissionsService]
   
})
export class PanelComponent
{
    @Input() user:string='';
}
