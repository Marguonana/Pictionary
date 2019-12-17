import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  theme: string;

  private REST_API_SERVER = "http://localhost:3000";
  private params : any[];
  private values : any[];
  private httpParams : HttpParams;


  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @param route Instance de la classe RouteList
   * Methode permettant de faire un post
   * Les données seront mise dans req.body.[PARAM]
   */
  public sendPostRequest(route : string){
    return this.httpClient.post(this.REST_API_SERVER + route, this.setObjectParams());
  }

  /**
   * 
   * @param route Parametre de la classe RouteList
   * Methode permettant de faire un get
   */
  public sendGetRequest(route : string){
    this.setHttpParams();
    let params = this.httpParams;
    return this.httpClient.get(this.REST_API_SERVER + route, {params});
  }

  /**
   * 
   * @param route Parametre de la classe RouteList
   * Méthode permettant de faire un update
   */
  public sendUpdateRequest(route : string){
    this.setHttpParams();
    let params = this.httpParams;
    return this.httpClient.put(this.REST_API_SERVER + route, {params});
  }

  /**
   * 
   * @param route Parametre de la classe RouteList
   * Méthode permettant de faire un delete
   */
  public sendDeleteRequest(route : string){
    this.setHttpParams();
    let params = this.httpParams;
    return this.httpClient.delete(this.REST_API_SERVER + route, {params});
  }

  /**
   * Initialise les parametres en entête de la requete front
   */
  private setHttpParams() : HttpParams{
    if (this.paramsReady()){
      this.httpParams = new HttpParams();
      this.params.forEach((param, index)=>{
        this.httpParams = this.httpParams.set(param,this.values[index]);
      })
    }
    return this.httpParams;
  }

  private setObjectParams() : Object {
    let body : Object = {};
    if (this.paramsReady()){
      this.params.forEach((param, index) => {
        body[param] = this.values[index];
      })
    }
    return body;
  }

  /**
   * 
   * @param paramsReceived Tableau de clefs
   * Fonction permettant d'affecter des key pour les paramètres de httpParams
   * Récupère les clefs des parametres. Elles devront être dans le même ordre que les values
   */
  public setterParamsKey(...paramsReceived : any[]){
    if (!paramsReceived){
      this.params = undefined;
    }
    this.params = new Array();
    paramsReceived.forEach(param => {
      this.params.push(param)
    })
  }

  /**
   * 
   * @param valuesReceived Tableau de valeurs
   * Fonction permettant d'affecter des value pour les paramètres de httpParams
   * Récupère les valeurs et les affecte à l'objet value de notre classe.
   * Les valeurs devront être dans le même ordre que les clefs
   */
  public setterParamsValues(...valuesReceived : any[]){
    if (!valuesReceived){
      this.values = undefined;
    }
    this.values = new Array();
    valuesReceived.forEach(value => {
      this.values.push(value)
    });
  }

  public paramsReady(){
    return (this.params && this.values && this.params.length != 0 && this.params.length === this.values.length)
  }

  /**
   * Fonction appelé lors de la destruction du service
   */
  ngOnDestroy(): void {
    console.log(" Dataservice destroyed");
  }
}

/**
 * Classe permettant de lister les routes back appelé par le front
 */
export class RouteList {
  private REST_API_WORDS = "/theme/words";
  private REST_API_CANVAS = "/partie/canvas"
  private REST_API_CREATEACCOUNT = "/joueur"

  dispatcher(keyWord){
    let route = undefined;
    switch(keyWord){
      case "choixTheme":
        route = this.REST_API_WORDS;
        break;
      case "sendCanvas":
        route = this.REST_API_CANVAS;
        break;
      case "createAccount":
        route = this.REST_API_CREATEACCOUNT;
        break;
    }
    return route;
  }
}
