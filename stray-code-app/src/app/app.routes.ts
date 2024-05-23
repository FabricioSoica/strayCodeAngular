import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { autorizacaoGuard } from './_guard/guard.component';
import { LoginComponent } from './_models/login/login.component';
import { AbrirEmpresaComponent } from './abrir-empresa/abrir-empresa.component';
import { ContabilidadeComponent } from './contabilidade/contabilidade.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { NotaFiscalComponent } from './nota-fiscal/nota-fiscal.component';
import { CnaeComponent } from './cnae/cnae.component';
import { TributacaoComponent } from './tributacao/tributacao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categoria', component: CategoryComponent, canActivate: [autorizacaoGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'abertura', component: AbrirEmpresaComponent},
  { path: 'contabilidade', component: ContabilidadeComponent},
  { path: 'marketing', component: MarketingComponent},
  { path: 'financeiro', component: FinanceiroComponent},
  { path: 'nota-fiscal', component: NotaFiscalComponent},
  { path: 'cnae', component: CnaeComponent},
  { path: 'tributacao', component: TributacaoComponent},
  { path: '**', component: HomeComponent},

];