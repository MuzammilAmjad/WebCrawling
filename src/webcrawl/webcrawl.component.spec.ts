import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcrawlComponent } from './webcrawl.component';

describe('WebcrawlComponent', () => {
  let component: WebcrawlComponent;
  let fixture: ComponentFixture<WebcrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebcrawlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
