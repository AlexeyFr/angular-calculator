import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  result: string = '';
  buttons: string[] = ['(', ')', 'CE', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  addExpression(value: string) {

    switch (value) {

      case 'AC':
        this.result = '';
        break;

      case 'CE':
        console.log(this.result);
        this.result = this.result.toString().slice(0, -1);
        break;

      case '=':
        try {
          this.result = eval(this.result);
          this.result === undefined ? this.result = '' : false;
        }
        catch (err) {
          console.log(err.message);
          this.result = 'Error';
        }
        break;

      default:
        this.result === 'Error' ? this.result = value : this.result += value;
    }

  }

}
