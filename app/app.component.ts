import {Component} from '@angular/core';
import {Osbb} from './osbb/osbb';
import { OsbbComponent } from './osbb/osbb.component';


@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    directives:[OsbbComponent]
})
export class AppComponent { 
    
}
