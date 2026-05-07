import { Component, HostListener, OnInit } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports:[MultiSelectModule,ButtonModule],
  standalone: true,
})
export class AboutComponent implements OnInit {
  broadChannel = new BroadcastChannel("chat_channel");
  constructor() { }

  name = 'About Component';

  ngOnInit(): void {
    this.broadChannel.onmessage = (message) => {
      console.warn("About Component received message: ", message);
    }
  }

  cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

  @HostListener("window:click", ['$event'])
  unloadHandler(event: Event) {
  //  console.log("About Component HostListener Clicked!", event);
  }

}
