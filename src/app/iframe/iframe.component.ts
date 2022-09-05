import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IFrameComponent implements OnInit {
  public url: SafeResourceUrl = '';
  private counter = 0;

  // https://apex.oracle.com/pls/apex/f?p=72102
  
  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { 
                this.route.url.subscribe(urlSegments => { (1)
                  this.counter += 1;
                  const requestedUrl = '/apex/f?p=' + '72102' + urlSegments.join(''); (2)
                  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl); (3)
                });

            }

  ngOnInit(): void {
  }

}
