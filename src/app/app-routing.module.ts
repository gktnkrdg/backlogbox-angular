import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }                          from './auth/auth.guard';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import Movie from './models/movie.model';

const appRoutes: Routes = [
  // {
  //   path: 'todo',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
  //   canLoad: [AuthGuard]
  // },

  { path: '',   redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

