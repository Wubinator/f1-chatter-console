import {EventListComponent} from "./events/event-list/event-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event/create-event.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponent },
  // Dit path moet voor events/:id want anders zou new als id meegegeven worden aan de EventDetailsComponent
  // Using a function for canDeactivate
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  // Using a service for canActivate
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: NotFoundComponent },
  // Default path
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]
