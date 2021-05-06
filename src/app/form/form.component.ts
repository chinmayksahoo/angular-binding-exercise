import { Component, OnInit } from '@angular/core';
import Insurance from '../Insurance';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  insurance:Insurance = new Insurance();
  insurances:Array<Insurance> = [];
  constructor() {
    this.insurance.Id = "ID"
    this.insurance.iname = "Name"
    this.insurance.iplan = "Plan"
    this.insurance.idur = "Duration"
  }

  ngOnInit(): void {
  }

  AddInsurance(){
    this.insurance.Id = (this.insurances.length + 1).toString();
    this.insurances.push(this.insurance)
    this.insurance = new Insurance()
    // alert(this.insurance.getData())
  }

  btnClickCan(){
    this.insurance.clearData()
    alert("Cleared to Default")
  }

}
