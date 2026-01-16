import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'nep-pdf',
  imports: [],
  template: `
    <div #embedPdfContainer></div>
  `,
  styleUrl: './pdf.css',
})
export class Pdf {
  embedPdfContainer = viewChild.required<HTMLElement>('embedPdfContainer');
}
