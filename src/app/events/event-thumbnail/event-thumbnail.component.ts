import {Component, Input} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event:any

  getStartTimeClass(): Array<string> {
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return {
    //   green: isEarlyStart,
    //   bold: isEarlyStart
    // }
    //////////
    // OF
    //////////
    // if ( this.event && this.event.time === '8:00 am') {
    //   return 'green bold'
    // }
    // return ''
    //////////
    // OF
    //////////
    if ( this.event && this.event.time === '8:00 am') {
      return ['green', 'bold']
    }
    return []
  }
}
