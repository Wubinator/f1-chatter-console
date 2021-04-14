import {Component, OnInit} from '@angular/core';
import {EventService} from "../service/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any
  constructor(
    private readonly eventService:EventService,
    private readonly route:ActivatedRoute) {}

  ngOnInit(): void {
    // + means casting as a number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
