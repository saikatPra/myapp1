import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { RelationshipManager } from './relationshipManager';

@Injectable()
export class RelationshipManagerService {
  relationshipManagers : RelationshipManager[];
  activeRelationshipManager : RelationshipManager;
  apiUrl: string = 'assets/RelationshipManagers.json';

  constructor(private http:Http) {}

    ///<summary>
    ///Http call to fetch RelationshipManagers from json
    ///</summary>
    fetchRelationshipManagers(): Observable<RelationshipManager[]> {
      return this.http.get(this.apiUrl)
          .map((res: Response) => {
            return this.relationshipManagers = res.json();
          })
          .catch(this.handleError);
    }

    ///<summary>
    ///Service method to get the RelationshipManagers
    ///</summary>
    getRelationshipManagers(): Observable<RelationshipManager[]> {
        if (!this.relationshipManagers) {
          return this.fetchRelationshipManagers();
        }
    }

    ///<summary>
    ///Service method to get the Active RelationshipManager
    ///</summary>
    getActiveRelationshipManager() {
      let selected;
      this.relationshipManagers.forEach( function(current, index, theArray){
        if(current.isVisible){
          selected = current;
        }
      });
      return this.activeRelationshipManager = selected;
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
