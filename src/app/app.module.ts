import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ToastrService} from "./common/toastr.service";
import {appRoutes} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {FooterComponent} from './common/footer/footer.component';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListComponent,
  EventRouteActivatorService,
  EventService,
  EventThumbnailComponent
} from './events/index'

import {
  NavbarComponent
} from './nav/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    FooterComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true
}
