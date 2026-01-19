import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import EmbedPDF from '@embedpdf/snippet';

@Component({
  selector: 'nep-pdf',
  imports: [],
  template: `
    <div class="embed-pdf-container" #embedPdfContainer></div>
  `,
  styleUrl: './pdf.scss',
})
export class Pdf implements AfterViewInit {
  embedPdfContainer = viewChild.required<ElementRef>('embedPdfContainer');

  private readonly platformId = inject(PLATFORM_ID);

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      EmbedPDF.init({
        type: 'container',
        target: this.embedPdfContainer().nativeElement,
        src: 'https://snippet.embedpdf.com/ebook.pdf',
        theme: {preference: 'system'},
      });
    }
  }
}
