import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { SignalComponent } from './signal/signal.component';
import { EventComponent } from './event/event.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferenceTemplateComponent } from './reference-template/reference-template.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { CustomDirectiveDirective } from './appDirectives/custom-directive.directive';
import { DirectivesComponent } from './directives/directives.component';
import { ScrollToTopDirectiveDirective } from './appDirectives/scroll-to-top-directive.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponentComponent } from './bootstrap-component/bootstrap-component.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { ApiComponentComponent } from './api-component/api-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { CommunicationComponentComponent } from './communication-component/communication-component.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BootstrapComponentComponent,
    BuiltInPipesComponent,
    CustomPipePipe,
    ServiceComponentComponent,
    ApiComponentComponent,
    FormComponentComponent,
    ReactiveFormComponentComponent,
    CommunicationComponentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
