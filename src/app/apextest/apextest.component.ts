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
  randomNumber: any = ''
  public token: string;
  public messageTime: string;
  public messageData: string;
  public urlSource: SafeResourceUrl;
  private allowedMessages = ['token', 'end', 'start'];
  public timeLeft = 10;
  public tokenid = '';
  public tokenexpirytime = '';
  public first_url = "https://apex.oracle.com/pls/apex/f?p=73255:41";
  public second_url = "https://apex.oracle.com/pls/apex/f?p=73255:9";

  private readonly src = 'https://apex.oracle.com';

  @ViewChild('data_iframe') theframe: ElementRef;

  constructor() {
    this.tokenid = localStorage.getItem('id_token');
    this.tokenexpirytime = localStorage.getItem('expires_at');
    console.log('constructor()->TOKENID-', this.tokenid);

  }

  ngOnInit(): void {

  }


  changeIFrameApexPage(url) {
    console.log('New URL is: ', url);
  }



  sendToIframe() {

    const element: HTMLIFrameElement = document.getElementById('data_iframe') as HTMLIFrameElement;
    const iframe = element.contentWindow;
    iframe.postMessage(this.tokenexpirytime, this.src);  

  }

  sendIframeToken() {
    console.log('sendIframeToken()', this.tokenid);
    const element: HTMLIFrameElement = document.getElementById('data_iframe') as HTMLIFrameElement;
    const iframe = element.contentWindow;

    iframe.postMessage(this.tokenid, this.src);

  }

  @HostListener('window:message', ['$event'])
  onMessage(e) {
    var origin = e.origin;
    if(origin !== this.src) {
      console.log(origin);
    } else {
      this.messageTime = new Date().toLocaleTimeString();
      this.messageData = e.data;

      if (this.allowedMessages.includes(this.messageData)) {
        console.log('Authorized Message - The Message is:', this.messageData);
        if (e.data == 'token') {
          this.sendIframeToken();
          return;
        }
      } else {
        console.log('Unauthorized Message - The Message is:', this.messageData);
      }
    }

  }


}
