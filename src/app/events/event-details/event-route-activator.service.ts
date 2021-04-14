import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "../service/event.service";

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(
    private readonly eventService:EventService,
    private readonly router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    // !! is cast to boolean
    const eventExists: boolean = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists) {
      this.router.navigate(['/404'])
    }

    // canActivate must return a boolean
    return eventExists
  }
}
