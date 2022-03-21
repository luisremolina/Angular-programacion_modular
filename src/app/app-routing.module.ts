import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy} from 'ngx-quicklink';
import { AdminGuard } from './guards/admin.guard';

import { NotFoundComponent } from './not-found/not-found.component';

// MODULOS
import { CustomPreloadService } from './services/custom-preload.service';



const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./webside/webside.module').then( m => m.WebsideModule ),
    data: {
      preload: true,
    }
  },
  {
    path: 'cms',
    canActivate: [ AdminGuard ],
    loadChildren: () => import('./cms/cms.module').then( m => m.CmsModule )
  },

  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
