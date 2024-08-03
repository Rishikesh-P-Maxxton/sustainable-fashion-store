import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidBannerComponent } from './vid-banner.component';

describe('VidBannerComponent', () => {
  let component: VidBannerComponent;
  let fixture: ComponentFixture<VidBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VidBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
