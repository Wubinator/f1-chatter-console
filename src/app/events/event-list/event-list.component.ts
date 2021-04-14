import {Component, OnInit} from '@angular/core';
import {EventService} from "../service/event.service";
import {ToastrService} from "../../common/toastr.service";

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events!: Array<any>
  constructor(
    private readonly eventService: EventService,
    private readonly toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventDate: string, eventName: string) {
    this.toastr.success(eventDate, eventName)
  }
}
