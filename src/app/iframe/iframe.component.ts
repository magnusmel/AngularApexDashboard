import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IFrameComponent implements OnInit {
  public url: SafeResourceUrl;
  private apexappid = ''; 

  @Input()  currentCity = 'London';
  @Output() newCityEvent = new EventEmitter<string>();



  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) {
    this.route.url.subscribe(urlSegments => {
      
      // Apex URL  change
      // const requestedUrl = 'https://apex.oracle.com/pls/apex/f?p=72102:1&x01=TOKEN:ABCSATYAtesttoken' ;
      const requestedUrl = 'https://globalminds.biz' ;

      console.log(requestedUrl);

      // Angular by default sanitises a URL, we need to bypass that so the full URL is rendered
      // NOTE: Need to look into security considerations of this
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl);
    });

    this.listenForFallbackRoutingEvents();
  }

  addNewCity(value: string) {
    this.newCityEvent.emit(value);
  }


  /*
   If the iframed-in app can't resolve a URL itself it will post a message to the parent
   iframe (this app). Listen to those messages and attempt to navigate to that URL.
   */
  listenForFallbackRoutingEvents() {
    // Create IE + others compatible event handler
    const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";


    eventer(messageEvent, (e) => {
      if (e.data.navigateTo) {
        console.log('parent received message!:  ', e.data);
        let url = e.data.navigateTo;
        console.log(url);
        this.router.navigateByUrl(url);
      }
    }, false);

    parent.postMessage("loadMyOrders","*");  //  `*` on any domain      

  }

 
  sendMessage(){
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
        var key = e.message ? "message" : "data";
        var data = e[key];
        //run function//
    },false);


    //child page -    

    parent.postMessage("loadMyOrders","*");  //  `*` on any domain      
  }

  ngOnInit() {
//const frame = window.parent.document.getElementbyId(elementId: 'loginFrame')
  
  console.log(window.parent.postMessage('hello from iframe', '*'));

  }


}
