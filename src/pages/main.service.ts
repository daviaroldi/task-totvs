import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  /**
    * Método construtor
    * @param http: Http
    */
    constructor(
        public http: Http
    ) {}

/**
  * Método get
  * @param endpoint: string
  * @param params: []
  */
  get(endpoint){
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    // });
    //
    // let options = {
    //   headers : headers
    // };

    return this.http.get(endpoint)
      .map(res => res.json());
  }
}
