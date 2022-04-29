import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadastrarEditarComponent } from './pages/clientes/clientes-cadastrar-editar/clientes-cadastrar-editar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasCadastrarEditarComponent } from './pages/contas/contas-cadastrar-editar/contas-cadastrar-editar.component';
import { ContasComponent } from './pages/contas/contas.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contas', component: ContasComponent },
  { path: 'contas/cadastrar/:cpf', component: ContasCadastrarEditarComponent },
  { path: 'contas/cadastrar', component: ContasCadastrarEditarComponent },
  { path: 'clientes/cadastrar', component: ClientesCadastrarEditarComponent },
  { path: 'clientes/editar/:id', component: ClientesCadastrarEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
