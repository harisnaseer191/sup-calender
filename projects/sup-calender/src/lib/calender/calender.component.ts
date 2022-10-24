import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  title = 'sup-calendar';
  calendars: any[] = [];
  public value: Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.calendars = this.getDays(new Date());
  }
  getDays(today: Date): any[] {
    var date = new Date(today.getFullYear(), today.getMonth(), 1);
    var days: any[] = [];
    var count = 1;
    var colorValue = 'none';
    var sumaryCount = 0;
    // Day of the week for the date
    var a = date.getDay();
    var nonEmpty = 7 - a; // nonEmpty Days in the first week
    var empty = 7 - nonEmpty; // Empty Days in the
    if (a != 7) {
      var list = [];
      for (let i = 0; i < empty; i++) {
        list.push({ date: null, day: 0, count: 0, colorValue: 'none' });
      }
      for (let i = 0; i < nonEmpty; i++) {
        list.push({
          date: new Date(date),
          day: count,
          count: sumaryCount,
          colorValue: colorValue,
        });
        date.setDate(date.getDate() + 1);
        count = count + 1;
        colorValue = 'none';
        sumaryCount = 0;
      }
      days.push(list);
    }
    var numberedCount = 1;
    while (date.getMonth() === today.getMonth()) {
      numberedCount = 0;
      var list = [];
      for (let i = 0; i < 7 && date.getMonth() === today.getMonth(); i++) {
        numberedCount = numberedCount + 1;
        list.push({
          date: new Date(date),
          day: count,
          count: sumaryCount,
          colorValue: colorValue,
        });
        date.setDate(date.getDate() + 1);
        count = count + 1;
        colorValue = 'none';
        sumaryCount = 0;
      }
      if (numberedCount < 7) {
        for (let i = 0; i < 7 - numberedCount; i++) {
          list.push({ date: null, day: 0, count: 0, colorValue: 'none' });
        }
      }
      days.push(list);
    }
    return days;
  }

}
