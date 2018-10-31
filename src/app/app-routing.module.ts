import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { AuthGuard }                          from './auth/auth.guard';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';

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
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: MovieListComponent }
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

