import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  // Used by the canDeactivate
  isDirty:boolean = true

  constructor(
    private readonly router:Router
  ) { }

  cancel() {
    this.router.navigate(['/events'])
  }
}
