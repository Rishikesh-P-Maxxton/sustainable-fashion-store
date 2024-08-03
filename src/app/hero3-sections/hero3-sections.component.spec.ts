import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero3SectionsComponent } from './hero3-sections.component';

describe('Hero3SectionsComponent', () => {
  let component: Hero3SectionsComponent;
  let fixture: ComponentFixture<Hero3SectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hero3SectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero3SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
