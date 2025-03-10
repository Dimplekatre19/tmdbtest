import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Imovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})
export class MovietableComponent implements OnInit {
  currentpage :number=1;
  totalmovie : number=0;
  pagesize: number= 20;
  displayedColumns: string[] = ['poster', 'title', 'release_date', 'vote_average'];
  dataSource = new MatTableDataSource<Imovie>()
  constructor(
    private _movieService : MovieService,
    private _router: Router
  ) { }

  ngOnInit(): void {
     this.fetchmovie(this.currentpage)
  }

  fetchmovie(page:number){
    this._movieService.fetchpopularmovie(page)
    .subscribe(res=>{
      console.log(res);
      this.dataSource.data= res.results;
      this.totalmovie=res.total_results
    }) 
  }
  onpagechange(event:PageEvent){
      this.currentpage=event.pageIndex+1;
      this.fetchmovie(this.currentpage);
  }
  navigatesinglemov(row:Imovie){
        this._router.navigate(['movies',row.id])
  }
}
