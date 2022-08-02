import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'accueil', component: AccueilComponent},
  { path: 'users', component: UtilisateurComponent},
  { path: 'gestion-menu', component: GestionMenuComponent},
  { path: '**', pathMatch: 'full', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}