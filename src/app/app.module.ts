import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokepipePipe } from './pipes/pokepipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    CardComponent,
    PokelistComponent,
    DetailComponent,
    FooterComponent,
    PokepipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
