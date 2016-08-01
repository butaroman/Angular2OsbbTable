import {Component} from '@angular/core';
import {Osbb} from './osbb/osbb';
import { OsbbComponent } from './osbb/osbb.component';
import { OsbbService } from './osbb/osbb.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    directives:[OsbbComponent],
    providers:[OsbbService]
})
export class AppComponent { 
    
}
