import { Component, OnInit } from '@angular/core';
import { BackendService } from './services/backend_interation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  search:any = {
    email:'',
    environment:'',
  }

  constructor(public _bs:BackendService){
  }

  ngOnInit(){
    this.initTableData(``);
  }

  initTableData(params:string){
    this._bs.getFilteredData(params).subscribe((response:any)=>{
      if(response.success){
        console.log('response.dat',response.data);
        this.events = response.data;
      }
      console.log(response);
    })
  }

  searchFunc(event){
    let query = "?"; 
    for (var key in this.search) { 
        if (query != "") { 
          query += "&"; 
        } 
        query += (key + "=" + encodeURIComponent(this.search[key])); 
    } 
    this.initTableData(query);
  }

  
  title = 'frontend';

  events: any = [];
}
