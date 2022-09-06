import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-apextest',
  templateUrl: './apextest.component.html',
  styleUrls: ['./apextest.component.css']
})
export class ApextestComponent implements OnInit {
  randomNumber:any=''
  constructor() { }

  ngOnInit(): void {
   
  }
  sendToIframe(){
    var iframe = document.getElementById('data_iframe');
    if (iframe == null) return;
    var iWindow = (<HTMLIFrameElement>iframe).contentWindow;
 
    iWindow.postMessage({"for":"iframe","data":"from parent"}, '*');
  }
  @HostListener('window:message',['$event'])
  onMessage(e)
{
  console.log(e)

if (e.data.for=="parent")
  {
  this.randomNumber =Math.floor(Math.random() * 10);
  }
}



}
