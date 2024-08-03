import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElem2Component } from './home-elem2.component';

describe('HomeElem2Component', () => {
  let component: HomeElem2Component;
  let fixture: ComponentFixture<HomeElem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeElem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeElem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
