import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MusicService {

  constructor(private http:HttpClient) {
  }

  getMusic(){
    return this.http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  }


}
