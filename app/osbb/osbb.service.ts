import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {IOsbb} from './osbb';

@Injectable()
export class OsbbService { 

    private deleteUrl:string = 'http://localhost:52430/myosbb/restful/osbb/id/';
    private postUrl:string = 'http://localhost:52430/myosbb/restful/osbb';
    private putUrl:string = 'http://localhost:52430/myosbb/restful/osbb';
    private tmpGetUrl:string = 'app/osbb/data.json';                               //   DELETE ME
    private getUrl:string = 'http://localhost:52430/myosbb/restful/osbb';


    constructor(private http: Http) { }

    getAllOsbb(): Promise<IOsbb[]> {
        return this.http.get(this.getUrl)
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    addOsbb(osbb:IOsbb): Promise<IOsbb> {
        let headers = new Headers({'Content-Type': 'application/json' });
        return this.http.post(this.postUrl, JSON.stringify(osbb), {headers})
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError);
    }

    editOsbb(osbb:IOsbb):Promise<IOsbb>  {
        console.log("OsbbService.editOsbb(osbb) ===> [id:" + osbb.osbbId + "  name:" + osbb.name + "          description:" + osbb.description + "]");
        let headers = new Headers({'Content-Type': 'application/json' });
        return this.http.put(this.putUrl, JSON.stringify(osbb), {headers})
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError);
    }

    deleteOsbb(osbb:IOsbb): Promise<IOsbb> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = ` ${this.deleteUrl}/${osbb.osbbId}`;
        console.log("URL:::::::::::::::::::::" + url);
        return this.http.delete(url,{headers})
                    .toPromise()
                    .then(res => osbb)
                    .catch(this.handleError);
        
    }

    private handleError(error: any):Promise<any> {
        console.log('HandleError', error);
        return Promise.reject(error.message || error);
    }
}