import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Demo",
    template: `

    <h2>Demo Component</h2>
    <p>Welcome to the Demo Component!</p>
    <button (click)='func()' class='btn'>Click Me</button>
    <p class="para">This is Customized Angular Component in Single File like React Comp</p>

    `,
    styles: [
    `.btn{
      border: none;
      padding: 10px;
      background: chocolate;
      font-weight: 800;
      border-radius: 10px;
      cursor: pointer;
    }
    `,
    `.para{
      font-size: 20px;
      font-weight: 600;
      color: teal;
      }
    `
    
    ]
})
export class DemoComponent implements OnInit {


    ngOnInit() {}

    func() {
        console.log("Button Clicked");
    }
}