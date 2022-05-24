import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';

import localeVi from '@angular/common/locales/vi';
import localeEn from '@angular/common/locales/en';
import localeEnGB from '@angular/common/locales/en-GB';
import localeEs from '@angular/common/locales/es';
import localeDe from '@angular/common/locales/de';
import localeIt from '@angular/common/locales/it';
import localeFr from '@angular/common/locales/fr';
import localePt from '@angular/common/locales/pt';
import localeRu from '@angular/common/locales/ru';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';
import localeZh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeVi, 'vi');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeEnGB, 'en-GB');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeIt, 'it');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeRu, 'ru');
registerLocaleData(localeJa, 'ja');
registerLocaleData(localeKo, 'ko');
registerLocaleData(localeZh, 'zh');

import { LuxonModule } from 'luxon-angular';

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
import { InputCalendarAppComponent } from './wijmo/input-calendar-app/input-calendar-app.component';
import { InputCalendarAppMainComponent } from './wijmo/input-calendar-app/input-calendar-app-main/input-calendar-app-main.component';
import { InputCalendarAppSelectionComponent } from './wijmo/input-calendar-app/input-calendar-app-selection/input-calendar-app-selection.component';
import { InputCalendarAppConfirmComponent } from './wijmo/input-calendar-app/input-calendar-app-confirm/input-calendar-app-confirm.component';
import { CssComponent } from './css/css.component';
import { CssFlexboxComponent } from './css/css-flexbox/css-flexbox.component';
import { CssGridComponent } from './css/css-grid/css-grid.component';
import { DataGridComponent } from './wijmo/data-grid/data-grid.component';
import { ChooseTimeComponent } from './choose-time/choose-time.component';
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
    InputCalendarAppComponent,
    InputCalendarAppMainComponent,
    InputCalendarAppSelectionComponent,
    InputCalendarAppConfirmComponent,
    CssComponent,
    CssFlexboxComponent,
    CssGridComponent,
    DataGridComponent,
    ChooseTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WjInputModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridSearchModule,
    WjGridGrouppanelModule,
    LuxonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
