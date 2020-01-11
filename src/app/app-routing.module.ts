import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';
import {AntientComponent} from './components/antient/antient.component';
import {JingbaiComponent} from './components/jingbai/jingbai.component';
import {PrayComponent} from './components/jingbai/pray.component';
import { TableOverviewExample } from './components/table/table-overview-example';
import { JsonComponent } from './components/json/json.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'original', component: AntientComponent },
      { path: 'yuanzhongxian', component: JsonComponent },
      { path: 'searchsong', component: TableOverviewExample },
      { path: 'jingbai', component: JingbaiComponent },
      { path: 'pray', component: PrayComponent },
      
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: LoginComponent }
    ])   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
