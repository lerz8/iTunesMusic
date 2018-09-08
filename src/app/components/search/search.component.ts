import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService} from '../../services/music.services';

@Component({
  selector: 'app-search',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  musica:any[] =[];
  constructor( private activatedRoute:ActivatedRoute,
               private musicService:MusicService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['term']);
      let term=params['term'].toLowerCase();
      this.musicService.getMusic().
      subscribe((data:any) => {
        this.musica=[];
        for(let album of data.feed.entry){
          let album_name = album['im:name'].label.toLowerCase();
          if(album_name.indexOf(term)>=0){
            this.musica.push(album);
          }
        }
        //this.loading = false;
        //console.log(this.music);
      })


    })
  }

}
