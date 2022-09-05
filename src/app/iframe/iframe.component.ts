import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IFrameComponent implements OnInit {
  name = 'Set iframe source';
  url: string = "https://apex.oracle.com/pls/apex/f?p=72102";
  urlSafe: SafeResourceUrl;


  // https://apex.oracle.com/pls/apex/f?p=72102
  
  constructor(private route: ActivatedRoute,
    public sanitizer: DomSanitizer) { 
              
            }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
