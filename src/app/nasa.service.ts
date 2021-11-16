import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nasa } from 'src/shared/nasa.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get<Nasa>("https://api.nasa.gov/planetary/apod?api_key=r4ls5B4WmLESUmNxmbdCPZu4ghOPj2QhykCacKMc");
  }
}
