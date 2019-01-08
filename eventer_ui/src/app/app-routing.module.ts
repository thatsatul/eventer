import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-events',
    pathMatch: 'full'
  },
  {
    path: 'my-events',
    loadChildren: './pages/my-events/my-events.module#MyEventsPageModule'
  },
  {
    path: 'public-events',
    loadChildren: './pages/public-events/public-events.module#PublicEventsPageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'event/:id', loadChildren: './pages/event/event.module#EventPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
