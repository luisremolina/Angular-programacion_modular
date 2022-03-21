import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { GridComponent } from './pages/grid/grid.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'grid', pathMatch: 'full' },
      { path: 'grid', component: GridComponent },
      { path: 'tasks', component: TaskComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
