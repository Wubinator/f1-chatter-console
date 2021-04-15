import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListComponent,
  EventRouteActivatorService,
  EventsListResolverService
} from './events/index'
import {Routes} from "@angular/router";
import {NotFoundComponent} from "./errors/not-found/not-found.component";

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponent, resolve: {events:EventsListResolverService}},
  // Dit path moet voor events/:id want anders zou new als id meegegeven worden aan de EventDetailsComponent
  // Using a function for canDeactivate
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  // Using a service for canActivate
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: NotFoundComponent },
  // Default path
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  // User module routing
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]
