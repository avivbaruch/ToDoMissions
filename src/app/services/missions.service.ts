import { Injectable } from "@angular/core";

@Injectable()
export class MissionsService{
    private    _missions: string[] =this.readFromLocalStorage();


    readFromLocalStorage():string[]{

          try
          {
            const jsonStr=  localStorage.getItem('missions')||'';
             return   JSON.parse(jsonStr);
          }
          catch
          {
                 return [];
          }
         
            return [];
    }

    saveInLocalStorage(){
          localStorage.setItem('missions', 
          JSON.stringify(this._missions));
    }

    addMission(missionToAdd:string){
        this._missions.push(missionToAdd);
    }
    removeMission(missionToRemove :string  ){
        const indexOfMission = this._missions.indexOf(missionToRemove);
        if(indexOfMission>-1){
            this._missions.splice(indexOfMission, 1);
 //           this.saveInLocalStorage();
        }
    }
    updateMission(oldMission :string, newMission:string){
        const indexOfMission = this._missions.indexOf(oldMission);
        if(indexOfMission>-1)
        this._missions[indexOfMission]= newMission;
    }
    getAllMissions(){
        return this._missions;
    }
}