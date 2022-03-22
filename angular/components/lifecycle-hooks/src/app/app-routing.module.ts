import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OninitComponent } from './oninit/oninit.component';

const routes: Routes = [
  { path: 'on-changes', component: OnChangesParentComponent },
  { path: 'do-check', component: DoCheckParentComponent },
  { path: 'oninit', component: OninitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
