import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  broadChannel = new BroadcastChannel("chat_channel");
  constructor() { }

  ngOnInit(): void {
    this.broadChannel.onmessage = (message) => {
      console.warn("About Component received message: ", message);
    }
  }

}
