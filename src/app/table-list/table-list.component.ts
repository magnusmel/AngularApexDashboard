import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  ItemsArray: any[] = [];

  constructor(private crudService: CrudService) {}

  
  ngOnInit() {
    this.crudService.getData()
    .subscribe((res: any[]) => {
      this.ItemsArray =  JSON.parse(JSON.stringify(res)) ;
      // this.ItemsArray =  res ;
  
      console.log('ItemsArray', this.ItemsArray);
    });

 
  }

}
