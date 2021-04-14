import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventListComponent} from './events/event-list/event-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar/navbar.component';
import {EventService} from "./events/service/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {appRoutes} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {CreateEventComponent} from './events/create-event/create-event.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {FooterComponent} from './common/footer/footer.component';
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";

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
