import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TformComponent } from './tform.component';

describe('TformComponent', () => {
  let component: TformComponent;
  let fixture: ComponentFixture<TformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
