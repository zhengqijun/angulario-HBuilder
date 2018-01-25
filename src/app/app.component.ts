import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }

  plusReady (){
    this.title = "plusReady";
    window["plus"].camera.getCamera().captureImage(function(p){
      console.dir(p);
    });	
  }

  ngOnInit() {
    if(window["plus"]){
      this.plusReady();
    } else {
      document.addEventListener('plusready',this.plusReady,false);
    }
  }





}
