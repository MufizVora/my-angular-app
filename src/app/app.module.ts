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
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { CustomDirectiveDirective } from './appDirectives/custom-directive.directive';
import { DirectivesComponent } from './directives/directives.component';
import { ScrollToTopDirectiveDirective } from './appDirectives/scroll-to-top-directive.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponentComponent } from './bootstrap-component/bootstrap-component.component';

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
    ReferenceTemplateComponent,
    StructuralDirectivesComponent,
    PushSpliceComponent,
    CustomDirectiveDirective,
    DirectivesComponent,
    ScrollToTopDirectiveDirective,
    BootstrapComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
