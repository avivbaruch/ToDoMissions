import { Component } from "@angular/core";
import { MissionsService } from "../services/missions.service";

@Component({
    selector:'save-db',
    template:`<input class='btn btn-primary' type='button' value='Save In DB' (click)="saveInDB()"/>`
})
export class SaveInDBComponent{
    saveInDB(){
        this.service.saveInLocalStorage();
    }
    constructor(public service: MissionsService){
    }
}