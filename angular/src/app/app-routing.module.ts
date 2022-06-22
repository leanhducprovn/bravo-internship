import { Component, NgModule } from '@angular/core';
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
import { FlexPropertyComponent } from './flex-property/flex-property.component';
import { CssWebsiteLayoutComponent } from './css-website-layout/css-website-layout.component';
import { JavascriptErrorsComponent } from './javascript-errors/javascript-errors.component';
import { WijmoComponent } from './wijmo/wijmo.component';
import { InputCalendarComponent } from './wijmo/input-calendar/input-calendar.component';
import { CoreComponent } from './core/core.component';
import { ContentChildParentComponent } from './core/content-child-parent/content-child-parent.component';
import { InputCalendarAppComponent } from './wijmo/input-calendar-app/input-calendar-app.component';
import { CssComponent } from './css/css.component';
import { CssFlexboxComponent } from './css/css-flexbox/css-flexbox.component';
import { CssGridComponent } from './css/css-grid/css-grid.component';
import { DataGridComponent } from './wijmo/data-grid/data-grid.component';
import { ChooseTimeComponent } from './choose-time/choose-time.component';
import { SliderComponent } from './slider/slider.component';
import { InputDateAppComponent } from './wijmo/input-date-app/input-date-app.component';
import { BravoComponent } from './bravo/bravo.component';
import { BravoRangeTimeComponent } from './bravo-range-time/bravo-range-time.component';
import { BravoSliderComponent } from './bravo-slider/bravo-slider.component';
import { GetDateComponent } from './get-date/get-date.component';

const routes: Routes = [
  {
    path: 'css-website-layout',
    component: CssWebsiteLayoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'get-date',
        component: GetDateComponent,
      },
      {
        path: 'bravo-slider',
        component: BravoSliderComponent,
      },
      {
        path: 'bravo-range-time',
        component: BravoRangeTimeComponent,
      },
      {
        path: 'bravo',
        component: BravoComponent,
      },
      {
        path: 'slider',
        component: SliderComponent,
      },
      {
        path: 'choose-time',
        component: ChooseTimeComponent,
      },
      {
        path: 'css',
        component: CssComponent,
        children: [
          {
            path: 'css-flexbox',
            component: CssFlexboxComponent,
          },
          {
            path: 'css-grid',
            component: CssGridComponent,
          },
        ],
      },
      {
        path: 'core',
        component: CoreComponent,
        children: [
          {
            path: 'content-child-parent',
            component: ContentChildParentComponent,
          },
        ],
      },
      {
        path: 'wijmo',
        component: WijmoComponent,
        children: [
          {
            path: 'input-date-app',
            component: InputDateAppComponent,
          },
          {
            path: 'input-calendar',
            component: InputCalendarComponent,
          },
          {
            path: 'input-calendar-app',
            component: InputCalendarAppComponent,
          },
          {
            path: 'data-gird',
            component: DataGridComponent,
          },
        ],
      },
      {
        path: 'javascript-errors',
        component: JavascriptErrorsComponent,
      },
      {
        path: 'flex-property',
        component: FlexPropertyComponent,
      },
      {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent,
        children: [
          {
            path: 'on-changes',
            component: OnChangesParentComponent,
          },
          {
            path: 'do-check',
            component: DoCheckParentComponent,
          },
          { path: 'on-init', component: OninitComponent },
          {
            path: 'after-content',
            component: AfterContentInitParentComponent,
          },
          {
            path: 'after-view',
            component: AfterViewParentComponent,
          },
          {
            path: 'spy',
            component: SpyComponent,
          },
        ],
      },
    ],
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
