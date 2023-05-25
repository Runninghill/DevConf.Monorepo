import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  element: any ;
  title = 'vehicleFinanceCalculatorUi';
  vehicleQuoteForm: any;
  vehicleQuotes: GetVehicleQuote[]= []
  constructor(private http:HttpClient , private formBuilder: FormBuilder){
    this.getInfo()
    this.vehicleQuoteForm = this.formBuilder.group({
      vehicledescription: ['', Validators.required],
      vehiclefinanceamount: ['', Validators.required],
      interestrate: ['', Validators.required],
      paymenttermmonths: ['', Validators.required],
    });
    this.getVehicleQuotes();
  }
  public getInfo(){
    this.http.get('http://localhost:3000/').subscribe(element =>{
      this.element = element;
    },
    error=>{
      console.log(error);

    });
  }

  sendVehicleQuote(vehicleQuote:InsertVehicleQuote) {
    const url = 'http://localhost:3000/vehicle-quote';
    this.http.post(url, vehicleQuote)
      .subscribe(response => {
        this.getVehicleQuotes();
        // Handle the response here
        console.log(response);
      }, error => {
        // Handle the error here
        console.log(error);
      });
  }

  getVehicleQuotes() {
    const url = 'http://localhost:3000/vehicle-quote';

    this.http.get<GetVehicleQuote[]>(url)
      .subscribe(vehicleQuotes => {
        // Handle the response here
        this.vehicleQuotes = vehicleQuotes;
      }, error => {
        // Handle the error here
        console.log(error);
      });
  }

  formatLabelPercentage(value: number): string {
    return `${value}%`;
  }

  formatLabelMonths(value: number): string {
    return `${value}`;
  }

  submitForm() {
    if (this.vehicleQuoteForm.valid) {
      const vehicleQuote: InsertVehicleQuote = this.vehicleQuoteForm.value;
      // Process the submitted vehicle quote data
      console.log(vehicleQuote);
      this.sendVehicleQuote(vehicleQuote)
    } else {
      // Handle form validation errors
    }
  }


}

export interface GetVehicleQuote {
  id: number;
  vehicledescription: string;
  vehiclefinanceamount: number;
  interestrate: number;
  paymenttermmonths: number;
  monthlypaymentamount: number;
  totalpaymentamount: number;
}

export interface InsertVehicleQuote {
  vehicledescription: string;
  vehiclefinanceamount: number;
  interestrate: number;
  paymenttermmonths: number;
}
