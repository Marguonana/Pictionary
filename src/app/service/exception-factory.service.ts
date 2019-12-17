import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExceptionFactoryService extends ErrorHandler{

  constructor(msg : string){
    super();
    console.error(msg);
  }

  // minException() : String {}
  // maxException() : String {}
  // notSamePasswordException() : String {}
  // notGoodPasswordException() : String {}
  // notGoodUsernameException() : String {}
  
}
