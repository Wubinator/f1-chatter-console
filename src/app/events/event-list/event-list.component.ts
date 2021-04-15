import {Component, OnInit} from '@angular/core';
import {EventService} from "../service/event.service";
import {ToastrService} from "../../common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../model/event.model";

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events!: IEvent[]
  constructor(
    private readonly eventService: EventService,
    private readonly toastr: ToastrService,
    private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventDate: string, eventName: string) {
    this.toastr.success(eventDate, eventName)
  }
}
