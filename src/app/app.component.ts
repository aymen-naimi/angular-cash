import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: number = 0;
  result: any = null

  getCash() {
    this.result = this.cash(this.value);
  }

  cash(value: number) {
    if (!value || (value === 1) || (value === 3) || (value < 0) || (value > 9007199254740991)) {
      return null;
    } else {
      const result = {
        two: 0,
        five: 0,
        ten: 0
      }

      if ((value % 2)) {
        result.five = 1;
        value = value - 5;
      }

      const nbTen = Math.floor(value / 10)
      result.ten = nbTen;
      value = value - nbTen * 10;

      result.two = (value / 2);

      return result;
    }
  }


}
