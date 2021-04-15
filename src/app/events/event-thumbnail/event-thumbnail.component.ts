import {Component, Input} from '@angular/core';
import {IEvent} from "../model/event.model";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event!:IEvent

  getStartTimeClass(): Array<string> {
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return {
    //   green: isEarlyStart,
    //   bold: isEarlyStart
    // }
    //////////
    // OR
    //////////
    // if ( this.event && this.event.time === '8:00 am') {
    //   return 'green bold'
    // }
    // return ''
    //////////
    // OR
    //////////
    if ( this.event && this.event.time === '8:00 am') {
      return ['green', 'bold']
    }
    return []
  }
}
