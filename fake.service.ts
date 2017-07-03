import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { RelationshipManager } from '../relationshipManager';


@Injectable()
export class FakeAppService {
  relationshipManagers : RelationshipManager[];
  activeRelationshipManager : RelationshipManager;
  apiUrl: string = 'assets/RelationshipManagers.json';s
  constructor() { 

  }
  fetchRelationshipManagers(): Observable<RelationshipManager[]> {
     return Observable.of(

      [{
	"id": "12",
	"name": "Christoph Schmidt",
	"title": "Ihr persönlicher Berater",
	"isVisible": true,
	"phoneNo": "(040) 5345 6534 21",
  "email": "christoph.schmidt@db.com",
	"imageAvailable": true,
	"imageUrl": "assets/images/Chrysanthemum.jpg"
}, {
	"id": "13",
	"name": "Ute Musterfrau",
	"title": "Spezialberater Zalhungsverkher",
	"isVisible": true,
	"phoneNo": "(030) 1234 1233 11",
  "email": "ute.musterfrau@db.com",
	"imageAvailable": true,
	"imageUrl": "assets/images/Desert.jpg"
}]

     );

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
