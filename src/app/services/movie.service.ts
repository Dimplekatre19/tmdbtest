import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovie, ImovieResponse, Isinglemovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_CONFIG= environment.apiconfig;
  POPULAR_MOVIE_URL= `${this.API_CONFIG.baseUrl}/movie/popular`
  constructor(
    private _http: HttpClient,

  ) { }


  fetchpopularmovie(page:number):Observable<ImovieResponse<Imovie>>{

    let params= new HttpParams()
                    .set("api_key",this.API_CONFIG.apiKey)
                    .set("page",page)
                    .set("defaultlanguage",this.API_CONFIG.defaultLanguage)
      return this._http.get<ImovieResponse<Imovie>>(this.POPULAR_MOVIE_URL,{
        params:params
      })   
  }

  getsinglemovie(id:string):Observable<Isinglemovie>{
      let movieurl= `${this.API_CONFIG.baseUrl}/movie/${id}`;
      let params=new HttpParams()
      .set("api_key",this.API_CONFIG.apiKey)
      .set("defaultlanguage",this.API_CONFIG.defaultLanguage)
      return this._http.get<Isinglemovie>(movieurl,{params})
  }
}
