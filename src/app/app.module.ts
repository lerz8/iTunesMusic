import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AlbumComponent } from './components/album/album.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {trimNamePipe} from './pipes/trim.names.pipe';

//importar rutas
import {ROUTES} from './app.routes';

//servicios
import {MusicService} from './services/music.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AlbumComponent,
    NavbarComponent,
    trimNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash :true})
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
