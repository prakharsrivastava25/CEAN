import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prakhar`s app';
  constructor(private apiService: ApiService){

  }
  data :any;


  clickMe(){
    this.apiService.getResults().subscribe((datas)=>{
      console.log("datas:",datas);
      this.data = datas;
    });
  }
  onSubmit(f){
    console.log('====================================');
    console.log("f",f);
    console.log('====================================');
    this.apiService.postData(f).subscribe((res) => {
      console.log("response received in angular for post method", res);
    });
  }
  
}
