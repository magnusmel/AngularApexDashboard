import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IFrameComponent } from '../iframe/iframe.component';

@Component({
  selector: 'app-frametest',
  templateUrl: './frametest.component.html',
  styleUrls: ['./frametest.component.css']
})
export class FrametestComponent implements OnInit {
  randomNumber: any=''
  public token: string;
  public messageTime: string;
  public messageData: string;
  public urlSource: SafeResourceUrl;
  private allowedMessages = ['token', 'end', 'start'];
  public timeLeft = 10;
  public tokenid = localStorage.getItem('id_token');
  public tokenexpirytime = localStorage.getItem('expires_at');
  public first_url = "https://apex.oracle.com/pls/apex/f?p=73255:41";
  public second_url = "https://apex.oracle.com/pls/apex/f?p=73255:9";

  @ViewChild('data_iframe') theframe: ElementRef;
 
  constructor() {
    console.log('TOKENID-', this.tokenid);
   }

  ngOnInit(): void {  
  }

  changeIFrameApexPage(url) {
  }

  sendToIframe(){
    var iframe = document.getElementById('data_iframe');
    if (iframe == null) return;
    var iWindow = (<HTMLIFrameElement>iframe).contentWindow;
    //  iWindow.localStorage. 
    // iWindow.frameElement.appendChild
    // iWindow.postMessage({"for":"iframe","data":"from parent"}, '*');
  }

  @HostListener('window:message',['$event'])
  onMessage(e)
{
  console.log(e)

if (e.data.for=="parent")
  {
  this.randomNumber =Math.floor(Math.random() * 1000);
  }
}

sendToParent(){ 
alert('HI');
}


}
