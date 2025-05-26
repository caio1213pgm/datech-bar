import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'bebida/:id',
    loadChildren: () => import('./bebida/bebida.module').then( m => m.BebidaPageModule)
  },
  {
    path: 'ingrediente',
    loadChildren: () => import('./pegar-pelo-ingrediente/pegar-pelo-ingrediente.module').then( m => m.PegarPeloIngredientePageModule)
  },
   {
  path: 'pegar-bebida-nome',
  loadComponent: () => import('./pegar-bebida-nome/pegar-bebida-nome.page').then(m => m.PegarBebidaNomePage)
},
  {
  path: 'pegar-bebida-copo',
  loadComponent: () => import('./pegar-bebida-copo/pegar-bebida-copo.page').then(m => m.PegarBebidaCopoPage)
}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
