import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new-registrations',
  templateUrl: './new-registrations.component.html',
  styleUrls: ['./new-registrations.component.scss']
})
export class NewRegistrationsComponent {
  jsonData: any
  new_users: any
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/').subscribe((data) => {
      this.jsonData = data
      this.new_users = this.jsonData.new_users
    });
  }
}
