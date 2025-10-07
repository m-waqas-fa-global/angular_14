import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-comps',
  templateUrl: './primeng-comps.component.html',
  styleUrls: ['./primeng-comps.component.scss']
})
export class PrimengCompsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value: string = "";

  messages:string | any= "Hello from PrimeNG Messages Component!"

}
