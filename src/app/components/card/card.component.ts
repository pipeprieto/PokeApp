import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data!:any;
  pokemon!:any;
  pokemons:Array<any> = []
  constructor(private service:AppService, private router:Router, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getPokemonData(this.data.url)
  }

  getPokemonData(url:string){
    this.service.getAllPokemonsData(url).subscribe((res:any)=>{
      this.pokemon = res
      let localstorage = window.localStorage.getItem('pokemons')
      if (localstorage === null) {
        window.localStorage.setItem('pokemons',JSON.stringify(this.pokemon))
      }else{
        let arr = JSON.parse(localstorage)
        arr.push(this.pokemon);
        window.localStorage.setItem('pokemons',JSON.stringify(arr))
      }
    })
  }

  alertUserDelete(modal:any){
    this.modalService.open(modal)
  }


}
