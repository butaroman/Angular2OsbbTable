import {Component} from '@angular/core';
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Osbb, IOsbb} from './osbb';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'osbb',
    templateUrl: './app/osbb/osbb.component.html',
     providers: [HTTP_PROVIDERS]
})
export class OsbbComponent { 
      osbb:IOsbb[];

      constructor(private http:Http) {
        this.http.get('./app/osbb/data.json')
               .map(response => response.json())
               .subscribe((data) => {this.osbb = data});
    }
}


 