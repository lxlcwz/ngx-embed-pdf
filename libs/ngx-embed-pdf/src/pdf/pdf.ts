import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import EmbedPDF, { EmbedPdfContainer, type I18nPluginConfig } from '@embedpdf/snippet';
import { nepI18nType } from './nep-pdf.type';

@Component({
  selector: 'nep-pdf',
  imports: [],
  template: `
    <div class="embed-pdf-container" #embedPdfContainerRef></div>
  `,
  styleUrl: './pdf.scss',
})
export class Pdf implements AfterViewInit {
  nepSrc = input<string | undefined>(undefined);
  nepI18n: nepI18nType = input<Partial<I18nPluginConfig>>({
    defaultLocale: 'zh-CN',
    fallbackLocale: 'en-US',
  });

  private embedPdfContainer: EmbedPdfContainer | undefined;

  private embedPdfContainerRef = viewChild.required<ElementRef>('embedPdfContainerRef');

  private readonly platformId = inject(PLATFORM_ID);

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      this.init();
    }
  }

  /**
   * Initializes the EmbedPDF container
   * @private
   */
  private init(): void {
    const embedPdfContainer = EmbedPDF.init({
      type: 'container',
      target: this.embedPdfContainerRef().nativeElement,
      src: this.nepSrc(),
      i18n: this.nepI18n(),
    });
    if (!embedPdfContainer) {
      throw new Error('Failed to initialize EmbedPDF container');
    }
    this.embedPdfContainer = embedPdfContainer;
  }
}
