import { Component, OnInit, ElementRef, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @ViewChild('iframe', {static: false}) iframe: ElementRef;
  firstInput = 5;
  doc;
  compRef: ComponentRef<InnerComponent>;

  constructor(private vcRef: ViewContainerRef) { }
  onLoad(iframe){
    this.doc = iframe.contentDocument || iframe.contentWindow;
    this.createComponent();
  }
  createComponent() {
    // const compFactory = this.resolver.resolveComponentFactory(InnerComponent);
    // this.compRef = this.vcRef.createComponent(compFactory);
    // this.compRef.location.nativeElement.id = 'innerComp';

    // (<InnerComponent>this.compRef.instance).firstInput = this.firstInput;

    // (<InnerComponent>this.compRef.instance).emitOutput.subscribe(response => {
    //   console.log(response);
    // });

    // this.doc.body.appendChild(this.compRef.location.nativeElement);
  }

  ngOnInit(): void {
  }

}
