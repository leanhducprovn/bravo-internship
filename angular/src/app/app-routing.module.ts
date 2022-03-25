import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterContentInitParentComponent } from './lifecycle-hooks/after-content-parent/after-content-init-parent.component';
import { DoCheckParentComponent } from './lifecycle-hooks/do-check-parent/do-check-parent.component';
import { HomeComponent } from './partials/home/home.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks/lifecycle-hooks.component';
import { OnChangesParentComponent } from './lifecycle-hooks/on-changes-parent/on-changes-parent.component';
import { OninitComponent } from './lifecycle-hooks/oninit/oninit.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { AfterViewParentComponent } from './lifecycle-hooks/after-view-parent/after-view-parent.component';
import { SpyComponent } from './lifecycle-hooks/spy/spy.component';
import { LoginComponent } from './custom-form/login/login.component';

const routes: Routes = [
  {
    path: 'lifecycle-hooks/on-changes',
    component: OnChangesParentComponent,
  },
  {
    path: 'lifecycle-hooks/do-check',
    component: DoCheckParentComponent,
  },
  { path: 'lifecycle-hooks/on-init', component: OninitComponent },
  {
    path: 'lifecycle-hooks/after-content',
    component: AfterContentInitParentComponent,
  },
  {
    path: 'lifecycle-hooks/after-view',
    component: AfterViewParentComponent,
  },
  {
    path: 'lifecycle-hooks/spy',
    component: SpyComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
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
