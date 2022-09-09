import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { data } from 'jquery';
import { IFrameComponent } from '../iframe/iframe.component';

@Component({
  selector: 'app-apextest',
  templateUrl: './apextest.component.html',
  styleUrls: ['./apextest.component.css']
})
export class ApextestComponent implements OnInit {
  randomNumber: any=''
  public token: string;
  public messageTime: string;
  public messageData: string;
  public urlSource: SafeResourceUrl;
  private allowedMessages = ['token', 'end', 'start'];
  public timeLeft = 10;
  public tokenid = '';
  public tokenexpirytime =  '';
  public first_url = "https://apex.oracle.com/pls/apex/f?p=73255:41";
  public second_url = "https://apex.oracle.com/pls/apex/f?p=73255:9";

  private readonly src = 'https://oracle.apex.com';

  @ViewChild('data_iframe') theframe: ElementRef;
 
  constructor() {
    this.tokenid = localStorage.getItem('id_token');
    this.tokenexpirytime = localStorage.getItem('expires_at');
    console.log('constructor()->TOKENID-', this.tokenid);

   }

  ngOnInit(): void {  
    // this.theframe.nativeElement  
    // window.addEventListener(
    //   'message',
    //   (event) => {
     
    //         this.messageTime = new Date().toLocaleTimeString();
    //         this.messageData = event.data;
                  
    //   },
    //   false
    // );


  }

  // sendMessageToApexPage(token) {
  //   document.getElementById('data_iframe')

  // }
  changeIFrameApexPage(url) {
    console.log('New URL is: ', url);    
  }

  

  sendToIframe(){
    
    const element: HTMLIFrameElement = document.getElementById('data_iframe') as HTMLIFrameElement;
    const iframe = element.contentWindow;
    //  iframe.postMessage({"for":"iframe","data":"from parent"}, '*');
    iframe.postMessage(this.tokenexpirytime, '*');

  }

  sendIframeToken(){
    // var iframe = document.getElementById('data_iframe');
    // if (iframe == null) return;
    // var iWindow = (<HTMLIFrameElement>iframe).contentWindow;

    const element: HTMLIFrameElement = document.getElementById('data_iframe') as HTMLIFrameElement;
    const iframe = element.contentWindow;
   
    iframe.postMessage(this.tokenid, '*');

  }

  @HostListener('window:message',['$event'])
  onMessage(e)
{
  // console.log('Caught you: ' + e);
  // const win = this.theframe.nativeElement.contentWindow;
  this.messageTime = new Date().toLocaleTimeString();
  this.messageData = e.data;
  if( e.data == null)
    console.log('Caught Null !');
  else if (e.data == 'end') {
    console.log('Found End Signal');
  }  else if (e.data == 'start') {
    console.log('Found start Signal');
  }  else if (e.data == 'token') {
    console.log('Found token Signal');   
    this.sendIframeToken();
  } else
    console.log('Caught Unknown Verb Signal !');   
    

}


}
