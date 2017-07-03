import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';


import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';


import { AppComponent } from './app.component';
import { AppService } from './service/app.service';
import { FakeAppService } from './service/fake.service';






describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[{ provide: AppService, useClass: FakeAppService }]
    }).compileComponents();
  }));
/*
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));*/

  it('SSSSSSSSSSSSSSSSS', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let cs = spyOn(fixture.componentInstance,"ngOnInit").and.callThrough();
    const appService = fixture.debugElement.injector.get(AppService);
    /*appService.fetchRelationshipManagers().subscribe((data)=>{
      console.log('here',data);
      const compiled = fixture.debugElement.nativeElement;
      const deEle = fixture.debugElement;
       fixture.detectChanges();
       console.log('compile', compiled);
      //expect(compiled.querySelector('relationshipManager-iconAvator')).toBeTruthy();
      console.log(deEle.query(By.css('.relationshipManager-iconAvator')));
       expect(deEle.query(By.css('.relationshipManager-iconAvator'))).toBeTruthy();
    })*/   


   
      
      const compiled = fixture.debugElement.nativeElement;
      const deEle = fixture.debugElement;
       fixture.detectChanges();
      
      //expect(compiled.querySelector('.relationshipManager-iconAvator')).toBeTruthy();
     
       expect(deEle.query(By.css('.relationshipManager-iconAvator'))).toBeTruthy();
       expect(deEle.queryAll(By.css('.relationshipManager-iconAvator')).length).toBe(2);
    


  }));
  



});
