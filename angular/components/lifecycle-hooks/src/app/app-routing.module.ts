import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { HomeComponent } from './home/home.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OninitComponent } from './oninit/oninit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  { path: 'lifecycle-hooks/on-changes', component: OnChangesParentComponent },
  { path: 'lifecycle-hooks/do-check', component: DoCheckParentComponent },
  { path: 'lifecycle-hooks/oninit', component: OninitComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
