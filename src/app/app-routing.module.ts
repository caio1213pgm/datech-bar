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
    path: 'pegar-pelo-alcool',
    loadChildren: () => import('./pegar-pelo-alcool/pegar-pelo-alcool.module').then( m => m.PegarPeloAlcoolPageModule)
  },
  {
    path: 'pegar-pela-categoria',
    loadChildren: () => import('./pegar-pela-categoria/pegar-pela-categoria.module').then( m => m.PegarPelaCategoriaPageModule)
  },
  {
    path: 'pegar-bebida-nome',
    loadChildren: () => import('./pegar-bebida-nome/pegar-bebida-nome.module').then( m => m.PegarBebidaNomePageModule)
  },
  {
    path: 'pegar-bebida-copo',
    loadChildren: () => import('./pegar-bebida-copo/pegar-bebida-copo.module').then( m => m.PegarBebidaCopoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
