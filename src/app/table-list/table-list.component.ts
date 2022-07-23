import { Component, OnInit } from '@angular/core';
// import { CrudService } from '../crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  ItemsArray: any[] = [];
  Items: any;
  constructor(private http: HttpClient) {}

  
  ngOnInit() {


    this.http.get<any>('https://apex.oracle.com/pls/apex/mygmlapexworkspace/countries/countrylist')
    .subscribe(data => {
       console.log(data);
      this.ItemsArray = data.items;
      console.log(this.ItemsArray);
    });
      
    
  }
    
    
  
 

  }


