import { Router , RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

export const Routing = RouterModule.forRoot([
    { path: '', component: SearchComponent},
    { path: 'about', component: AboutComponent},
    { path: 'artist/:id', component: ArtistComponent},
    { path: 'album/:id', component: AlbumComponent},
    { path: '**', component:SearchComponent},
]);