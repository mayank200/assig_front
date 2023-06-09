import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then((m) => m.ProductsModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
