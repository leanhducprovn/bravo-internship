import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesComponent } from './lifecycle-hooks/on-changes/on-changes.component';
import { OnChangesParentComponent } from './lifecycle-hooks/on-changes-parent/on-changes-parent.component';
import { ChildComponent } from './lifecycle-hooks/child/child.component';
import { ChildViewComponent } from './lifecycle-hooks/child-view/child-view.component';
import { OninitComponent } from './lifecycle-hooks/oninit/oninit.component';
import { DoCheckComponent } from './lifecycle-hooks/do-check/do-check.component';
import { DoCheckParentComponent } from './lifecycle-hooks/do-check-parent/do-check-parent.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './partials/home/home.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { HeaderComponent } from './partials/header/header.component';
import { AfterContentInitComponent } from './lifecycle-hooks/after-content-init/after-content-init.component';
import { AfterContentInitParentComponent } from './lifecycle-hooks/after-content-init-parent/after-content-init-parent.component';
import { AfterViewComponent } from './lifecycle-hooks/after-view/after-view.component';
import { AfterViewParentComponent } from './lifecycle-hooks/after-view-parent/after-view-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    ChildComponent,
    ChildViewComponent,
    OninitComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    LifecycleHooksComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AfterContentInitComponent,
    AfterContentInitParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
