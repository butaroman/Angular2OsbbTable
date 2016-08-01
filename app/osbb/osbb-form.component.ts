import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

import { IOsbb, Osbb} from './osbb';

@Component({
    selector: 'osbb-form',
    templateUrl: './app/osbb/osbb-form.component.html'
    //styleUrls: ['./app/components/todos/todo-form/todo-form.component.css']
})
export class OsbbFormComponent implements OnInit{
    @Output() created: EventEmitter<Osbb>;
    @Output() updated: EventEmitter<Osbb>;
    @Input() osbb:IOsbb;

    constructor() {
        this.created = new EventEmitter<Osbb>();
        this.updated = new EventEmitter<Osbb>();
    }

    ngOnInit() {
        if(this.osbb === undefined){
            this.osbb = new Osbb("", "");
        }
    }

    createOsbb(name:string, description:string) {
        if (name) {
            let osbb = new Osbb(name, description);
            this.created.emit(osbb);
        }
    }

    editOsbb(name:string, description:string) {
        console.log("osbbFromComponent.editOsbb");
        if (name) {
           this.osbb.name = name;
           this.osbb.description = description;
           this.updated.emit(this.osbb);
        }
    }
}