import { Component, Input, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-top-data-card',
  templateUrl: './top-data-card.component.html',
  styleUrls: ['./top-data-card.component.scss']
})
export class TopDataCardComponent {
  jsonData: any
  topCards: any
  slicedNumbers: any = []
  constructor(private http: HttpClient) {
  }
  ngOnInit() {

    this.loadData()
  }

  loadData() {
    this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/').subscribe((data) => {
      this.jsonData = data
      this.topCards = this.jsonData.top_cards
      this.trimString()
    });
  }
  ngAfterViewInit() {
  }

  public trimString() {
    this.topCards.forEach((item: any) => {
      this.slicedNumbers.push(this.sliceData(item.sub_header.slice(0, 3))) 
    });
  }

  public sliceData(item: string) {
    return item.slice(0, 3)
  }
}
