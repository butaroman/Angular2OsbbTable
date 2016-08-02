import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import { MODAL_DIRECTIVES} from 'ng2-bs3-modal/ng2-bs3-modal';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Osbb, IOsbb} from './osbb';
import { OsbbService } from './osbb.service';
import { OsbbFormComponent } from './osbb-form.component';

@Component({
    selector: 'osbb',
    templateUrl: './app/osbb/osbb.component.html',
    directives:[OsbbFormComponent, MODAL_DIRECTIVES],
    providers: [HTTP_PROVIDERS, OsbbService]
})
export class OsbbComponent implements OnInit { 
    
    osbbArr:IOsbb[];
    updatedOsbb:IOsbb;

    constructor( private osbbService: OsbbService) { 
        this.osbbArr = [];
    }
    ngOnInit() {
        this.osbbService.getAllOsbb().then(osbbArr => this.osbbArr = osbbArr);
    }

    private initUpdatedOsbb(osbb:IOsbb): void {
        this.updatedOsbb = osbb;
    }

    onOsbbCreated(osbb:IOsbb): void {
        this.osbbService.addOsbb(osbb).then(osbb => this.addOsbb(osbb));
    }

    onOsbbEdited(osbb:IOsbb): void {
        this.osbbService.editOsbb(osbb);
    }

    onOsbbDeleted(osbb:IOsbb): void {
        if(confirm("Are you sure?")) {
            this.osbbService.deleteOsbb(osbb).then(osbb => this.deleteOsbb(osbb));
        }
    }

    private addOsbb(osbb: IOsbb): void {
        console.log("new OSBB [id:" + osbb.osbbId + "  name:" + osbb.name + " description:" + osbb.description + "]");
        this.osbbArr.push(osbb);
    }

     private deleteOsbb(osbb: IOsbb): void {
         let index = this.osbbArr.indexOf(osbb);
         if(index > -1) {
            this.osbbArr.splice(index, 1);
         }
    }
}