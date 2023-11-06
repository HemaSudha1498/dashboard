import { Component } from '@angular/core';
import { ApiDataService } from './api-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: any;

  constructor(private ApiDataService: ApiDataService, private http: HttpClient) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/',
      {
        headers: {
          "Accept": "application/json",
          "Accept-Language": "EN",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).subscribe((data) => {
        this.data = data
      });
  }
}
