import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RelationshipManager } from './relationshipManager';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'app';
  appresponse: RelationshipManager[] = [];
  selectedItem: object=RelationshipManager;
  isSelected: Boolean = true;
  constructor(private appService: AppService, private cd: ChangeDetectorRef){}

ngOnInit() {
    this.appService.fetchRelationshipManagers()
        .subscribe((response: RelationshipManager[]) => {
          this.appresponse = response;
          response.forEach((item) => {
            if(item.isVisible === true){
               this.selectedItem = item;
 
            }else{

              this.selectedItem = item;
            }
          })
        })
  }

}
