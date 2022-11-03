import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddMissionComponent } from './components/add-mission.component';
import { MissionsList } from './components/missions-list.component';
import { PanelComponent } from './components/panel.component';
import { RemoveMissionComponent } from './components/remove-mission.component';
import { SaveInDBComponent } from './components/saveInDB.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    MissionsList,
    RemoveMissionComponent,
    SaveInDBComponent,
    AddMissionComponent  
  ],
  imports: [
    BrowserModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
