import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyservice:SpotifyService) { }
  searchStr:string;
  searchRes:Artist[];
  ngOnInit() {
  }

  searchMusic() {
    this._spotifyservice.searchMusic(this.searchStr).subscribe(res => this.searchRes=res.artists.items);
  }

}
