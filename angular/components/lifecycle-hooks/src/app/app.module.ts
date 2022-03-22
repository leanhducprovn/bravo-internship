import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { ChildComponent } from './child/child.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    ChildComponent,
    ChildViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
