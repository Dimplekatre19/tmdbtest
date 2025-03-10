import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Isinglemovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movieId!:string;
movieobj!:Isinglemovie;

  constructor(
    private _movieservice : MovieService,
    private _routes :ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.movieId= this._routes.snapshot.params['id']
     if(this.movieId){
        this._movieservice.getsinglemovie(this.movieId)
                          .subscribe(res=>{
                             console.log(res);
                             this.movieobj=res
                          })
     }
  }

}
