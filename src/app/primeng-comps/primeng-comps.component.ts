import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-primeng-comps',
  templateUrl: './primeng-comps.component.html',
  styleUrls: ['./primeng-comps.component.scss']
})
export class PrimengCompsComponent implements OnInit, DoCheck ,AfterViewInit{

    broadChannel = new BroadcastChannel("chat_channel");
    eventSource = new EventSource("https://dummyjson.com/carts/34");
    constructor(private route:Router ){
        // route.navigateByUrl('/detail')
    }
  
     routeTo(){
        this.route.navigate(['/detail'])
     }

     routeBack(){
        this.route.navigate(['/login'])
     }
  
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
    this.printArray(this.data, false);    
  }

   ngAfterViewInit(): void {
     console.log("ngAfterView called");
   }
 
  printArray(ary: any, isArray: boolean) {
    if (isArray == true) {
      for (let obj of ary) {
        // console.warn(obj?.screenName,"-", obj?.screenLink)
      }
    } else {
      for (let obj in ary) {
        // console.log(obj, " - ", ary[obj]);
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

  sendMsg(){
    this.broadChannel.postMessage(this.value || "No Message");
  }

}
