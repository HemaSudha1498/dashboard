import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent {
  jsonData: any
  recent_orders: any
  popupEnabled: boolean = false
  customer: any
  product: any

  constructor(private http: HttpClient) {
  }

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
      this.jsonData = data
      this.recent_orders = this.jsonData.recent_orders
    });
  }
  public enablePopUp(data: any) {
    this.popupEnabled = !this.popupEnabled
    if (data != null) {
      this.customer = data.name
      this.product = data.product
    }
  }
}
