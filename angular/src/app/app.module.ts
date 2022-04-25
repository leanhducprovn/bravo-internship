import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeVi, 'vi');

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
import { AfterContentInitComponent } from './lifecycle-hooks/after-content/after-content-init.component';
import { AfterContentInitParentComponent } from './lifecycle-hooks/after-content-parent/after-content-init-parent.component';
import { AfterViewComponent } from './lifecycle-hooks/after-view/after-view.component';
import { AfterViewParentComponent } from './lifecycle-hooks/after-view-parent/after-view-parent.component';
import { SpyComponent } from './lifecycle-hooks/spy/spy.component';
import { SpyDirective } from './lifecycle-hooks/spy/spy.directive';
import { InputComponent } from './custom-form/input/input.component';
import { LoginComponent } from './custom-form/login/login.component';
import { FormComponent } from './custom-form/form/form.component';
import { FlexPropertyComponent } from './flex-property/flex-property.component';
import { CssWebsiteLayoutComponent } from './css-website-layout/css-website-layout.component';
import { JavascriptErrorsComponent } from './javascript-errors/javascript-errors.component';
import { WijmoComponent } from './wijmo/wijmo.component';
import { InputCalendarComponent } from './wijmo/input-calendar/input-calendar.component';
import { CoreComponent } from './core/core.component';
import { ContentChildComponent } from './core/content-child/content-child.component';
import { ContentChildParentComponent } from './core/content-child-parent/content-child-parent.component';
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
    SpyComponent,
    SpyDirective,
    InputComponent,
    LoginComponent,
    FormComponent,
    FlexPropertyComponent,
    CssWebsiteLayoutComponent,
    JavascriptErrorsComponent,
    WijmoComponent,
    InputCalendarComponent,
    CoreComponent,
    ContentChildComponent,
    ContentChildParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WjInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
