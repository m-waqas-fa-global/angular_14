import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-comps',
  templateUrl: './primeng-comps.component.html',
  styleUrls: ['./primeng-comps.component.scss']
})
export class PrimengCompsComponent implements OnInit, DoCheck {

  constructor() { }
  value: string = "";

 
  uRightObj = [{
    "id": 109,
    "status": 1,
    "screenName": "Create Claim Batch",
    "screenLink": "3-5-1",
    "ordering": null,
    "parentScreen": 1
  },
  {
    "id": 110,
    "status": 1,
    "screenName": "View Claim Batch",
    "screenLink": "3-5-2",
    "ordering": "",
    "parentScreen": 1
  },
  {
    "id": 141,
    "status": 1,
    "screenName": "Claim Control",
    "screenLink": "3-6",
    "ordering": null,
    "parentScreen": 3
  }]

  doctor = [
    "Dr.Castillo, Ricardo",
    "Dr.Chhabria, Aruna",
    "Dr.Friedrich, William",
    "Dr.Rayfield, John",
    "Dr.Tellez-Flores, Israel",
    "Dr.Cristia, Cristal",
    "Dr.Gibson, William",
    "Dr.Gonzalez, Robert",
    "Dr.Wells, Howard",
    "Dr.Diamond, Micheal",
    "Dr.Guerrero, Martin",
    "Dr.Hamilton, Franchell",
    "Dr.Kernan, Leah",
    "Dr.Williams, Megan Khmelev",
    "Dr.Panzarella, Robert",
    "Dr.Thomas, Angela",
    "Dr.Trevino, Jaime",
    "Dr.Campbell, Mitra",
    "Dr.OGUNTODU MD, OLAKUNLE",
    "Dr.Luong, Ben",
    "Dr.HOXHA, BESIM"
  ]
  data = {
    "id": 110,
    "status": 1,
    "screenName": "View Claim Batch",
    "screenLink": "3-5-2",
    "ordering": "Pending",
    "parentScreen": 1
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    // this.printArray(this.uRightObj, true);
    this.printArray(this.data, false);
  }
 
  printArray(ary: any, isArray: boolean) {
    if (isArray == true) {
      for (let obj of ary) {
        console.warn(obj?.screenName,"-", obj?.screenLink)
      }
    } else {
      for (let obj in ary) {
        console.log(obj, " - ", ary[obj]);
      }
    }
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck called");
    if (this.value.length > 0 && this.value.includes("w")) {
      console.log("Value length is greater than 0");
      return;
    }
  }

}
