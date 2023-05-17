import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  element: any ;
  title = 'vehicleFinanceCalculatorUi';
  constructor(private http:HttpClient){
    this.getInfo()
  }
  public getInfo(){
    this.http.get('http://localhost:3000/').subscribe(element =>{
      this.element = element;
    },
    error=>{
      console.log(error);

    });
  }


  formatLabelPercentage(value: number): string {
    return `${value}%`;
  }

  formatLabelMonths(value: number): string {
    return `${value}`;
  }


}
