import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { RelationshipManager } from '../relationshipManager';


@Injectable()
export class AppService {
  relationshipManagers : RelationshipManager[];
  activeRelationshipManager : RelationshipManager;
  apiUrl: string = 'assets/RelationshipManagers.json';s
  constructor(private http: Http) { 

  }
  fetchRelationshipManagers(): Observable<RelationshipManager[]> {
      return this.http.get(this.apiUrl)
          .map((res: Response) => {
            return this.relationshipManagers = res.json();
          })
          .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'An Error occured');
    }

}
