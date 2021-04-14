import {Component} from '@angular/core';
import {version} from '../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Will be used to show the version on the application page
  public version: string = version
}
