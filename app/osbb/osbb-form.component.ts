import { Component, Output, Input, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IOsbb, Osbb} from './osbb';

@Component({
    selector: 'osbb-form',
    templateUrl: './app/osbb/osbb-form.component.html',
    directives:[MODAL_DIRECTIVES]
    //styleUrls: ['./app/components/todos/todo-form/todo-form.component.css']
})
export class OsbbFormComponent implements OnInit{
    @Output() created: EventEmitter<Osbb>;
    @Output() updated: EventEmitter<Osbb>;
    @Input() osbb:IOsbb;



    @ViewChild('updateModal')
    updateModal:ModalComponent;

   // @ViewChild('createModal')
   // createModal:ModalComponent;

    openUpdateModal() {
       console.log("open MODAL WINDOW!!!");
        this.updateModal.open();  
    }

    closeUpdateModal() {
        this.updateModal.close();
    }

   // openCreateModal() {
       // this.createModal.open();
    //}

   // closeCreateModal() {
      //  this.createModal.close();
   // }

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