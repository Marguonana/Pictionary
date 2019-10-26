import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  theme: string;

  private REST_API_SERVER = "http://localhost:3000";
  
  private REST_API_WORDS = "/theme/words"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    let params = new HttpParams().set('theme', this.theme); 
    return this.httpClient.get(this.REST_API_SERVER + this.REST_API_WORDS, {params});
  }

  public setParams(value,mode){
    if (!value) return;
    switch(mode){
      case 'choixTheme':
        this.theme = value;
        break;
      default:
        break;
    }
  }
}
