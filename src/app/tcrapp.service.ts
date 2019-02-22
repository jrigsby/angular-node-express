import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TcrappService {

  constructor(private http:Http) { }

  //noinspection JSAnnotator
  sendMail(name: string, email: string, phone: string, subject: string, message: string): Promise<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}/sendemail`, {name: name, email: email, phone:phone, subject: subject, message: message}, options)
      .toPromise()
      .then((response) => {
        return response.json().sent as boolean;
      })
      .catch(this.handleError);
  }

  //noinspection JSAnnotator
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCookieValue(name: string) {
    var cookieList = document.cookie.split('; ');
    var cookies = {};
    for (var i = cookieList.length - 1; i >= 0; i--) {
      var cookie = cookieList[i].split('=');
      cookies[cookie[0]] = cookie[1];
    }
    return cookies[name];
  }

  setAnimated(){
    var val = this.getCookieValue("tcrdev");
    if (val != null) {
      this.animated = false;
    }
  }

  setCookie(){
    var val = this.getCookieValue("tcrdev");
    var action = this.title;
    var model = {};
    var wow = true;
    if (val == null) {
      model[action] = "1";
    } else {
      //cookie exists already, so dont show some animations anymore
      this.animated = false;
      model = JSON.parse(decodeURIComponent(val));
      if (model[action] == null) {
        model[action] = "1";
      }
      else{
        wow = false;
      }
    }
    this.wow = wow;
    document.cookie = "tcrdev=" + encodeURIComponent(JSON.stringify(model)) + ";path=/";
  }

  animated = true;
  title = "TCR Root";
  wow = true;
  url = "api";
}
