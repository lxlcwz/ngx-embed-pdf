import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pdf } from '@lxlcwz/ngx-embed-pdf';

@Component({
  selector: 'demo-root',
  imports: [RouterOutlet, Pdf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo');
}
