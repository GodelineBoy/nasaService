import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { Observable } from 'rxjs';
import { Nasa } from 'src/shared/nasa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'myNasaService';

  public imgOfTheDay: string | undefined;

  constructor(private nasaService: NasaService){
    this.nasaService.getImageOfTheDay().subscribe(data => {
      this.imgOfTheDay = data.url
  })
  }
  ngOnInit(){}
}
