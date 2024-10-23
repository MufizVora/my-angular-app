import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { myAppComponent } from './myAPP/myApp.component';
import { NotificationComponent } from './notification/notification.component';
import { SignalComponent } from './signal/signal.component';
import { EventComponent } from './event/event.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ReferenceTemplateComponent } from './reference-template/reference-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    myAppComponent,
    NotificationComponent,
    SignalComponent,
    EventComponent,
    ClassStyleComponent,
    TwoWayBindingComponent,
    ReferenceTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
