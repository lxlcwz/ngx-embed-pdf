import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEmbedPdf } from './ngx-embed-pdf';

describe('NgxEmbedPdf', () => {
  let component: NgxEmbedPdf;
  let fixture: ComponentFixture<NgxEmbedPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEmbedPdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEmbedPdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
