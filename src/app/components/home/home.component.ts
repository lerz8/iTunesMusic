import { Component, OnInit } from '@angular/core';
import {MusicService} from '../../services/music.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  musica: any[] = [];
  loading:boolean =true;
  constructor( private _musicservice:MusicService ) {
    this._musicservice.getMusic().
    subscribe((data:any) => {
      this.musica = data.feed.entry;
      this.loading = false;
      console.log(data.feed.entry);
    })
  }

  ngOnInit() {

  }

}
