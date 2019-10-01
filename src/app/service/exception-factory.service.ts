import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExceptionFactoryService extends ErrorHandler{

  constructor(){
    super();
  }
  // minException() : String {}
  // maxException() : String {}
  // notSamePasswordException() : String {}
  // notGoodPasswordException() : String {}
  // notGoodUsernameException() : String {}
  
}
