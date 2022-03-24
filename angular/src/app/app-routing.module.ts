import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterContentInitParentComponent } from './lifecycle-hooks/after-content-parent/after-content-init-parent.component';
import { AfterContentInitComponent } from './lifecycle-hooks/after-content/after-content-init.component';
import { DoCheckParentComponent } from './lifecycle-hooks/do-check-parent/do-check-parent.component';
import { HomeComponent } from './partials/home/home.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks/lifecycle-hooks.component';
import { OnChangesParentComponent } from './lifecycle-hooks/on-changes-parent/on-changes-parent.component';
import { OninitComponent } from './lifecycle-hooks/oninit/oninit.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
  },
  {
    path: 'lifecycle-hooks/on-changes',
    component: OnChangesParentComponent,
  },
  {
    path: 'lifecycle-hooks/do-check',
    component: DoCheckParentComponent,
  },
  { path: 'lifecycle-hooks/oninit', component: OninitComponent },
  {
    path: 'lifecycle-hooks/after-content-init',
    component: AfterContentInitParentComponent,
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
