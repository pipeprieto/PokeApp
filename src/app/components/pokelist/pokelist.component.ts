import { Component, OnInit } from '@angular/core';
import { AppService, ResponsePokes,Pokemon } from 'src/app/services/app.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
})
export class PokelistComponent implements OnInit {
  data!: Array<any>;
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.getPokemons();
    
  }

  getPokemons() {
    this.service.getPokemons().subscribe((res:any)=>{
      this.data= res.results;
    })
  }
}
