import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) {

    // this.http.get('https://api.fy23ey05.careers.ifelsecloud.com'
    //   // {
    //   //   headers: {
    //   //     "Accept": "application/json",
    //   //     "Accept-Language": "EN",
    //   //     "Content-Type": "application/json",
    //   //     "Access-Control-Allow-Origin": "*"
    //   //   }
    //   // }
    // ).subscribe((res: any) => {
    //   console.log(res)
    // }, (error: any) => {
    //   console.log(error)
    // });


  }
}
