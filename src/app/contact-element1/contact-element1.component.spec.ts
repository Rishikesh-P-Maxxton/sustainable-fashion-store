import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactElement1Component } from './contact-element1.component';

describe('ContactElement1Component', () => {
  let component: ContactElement1Component;
  let fixture: ComponentFixture<ContactElement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactElement1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactElement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
