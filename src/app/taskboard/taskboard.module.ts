import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DragulaModule } from 'ng2-dragula';
import { TaskboardRoutingModule } from "./taskboard-routing.module";
import { FormsModule } from '@angular/forms';
import { TaskboardComponent } from "./taskboard.component";

@NgModule({
    imports: [
        CommonModule,
        TaskboardRoutingModule,
        DragulaModule,
        FormsModule 
    ],
    declarations: [
        TaskboardComponent
    ]
})
export class TaskboardModule { }
