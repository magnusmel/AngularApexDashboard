import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  randomNumber:any=''
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){ 
   
 
    window.parent.window.postMessage({"for":"parent","data":"from iframe"}, '*');
  }
  @HostListener('window:message',['$event'])
  onMessage(e) 
{
  console.log(e)

if (e.data.for=="iframe")
  {
  this.randomNumber =Math.floor(Math.random() * 10);
  }
}

}
