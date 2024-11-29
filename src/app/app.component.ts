import { Component } from '@angular/core';
import {WebcrawlComponent} from '../webcrawl/webcrawl.component';

@Component({
  selector: 'app-root',
  imports: [WebcrawlComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment2';
}
