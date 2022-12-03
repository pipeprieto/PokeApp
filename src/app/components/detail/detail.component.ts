import { Component, OnInit } from '@angular/core';
import { AppService, Pokemon } from 'src/app/services/app.service';
import { Router,Params,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  parametros!: any;
  pokemon!: any;
  constructor(
    private service: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getPokemonDataById(this.parametros['id'])
  }

  getParams() {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.parametros = param;
    });
  }

  getPokemonDataById(param:string){
    this.service.getPokemonDataById(param).subscribe((res:any)=>{
      this.pokemon = res;
      console.log(this.pokemon)
    })
  }
}
