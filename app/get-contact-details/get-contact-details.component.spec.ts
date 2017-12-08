import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContactDetailsComponent } from './get-contact-details.component';

describe('GetContactDetailsComponent', () => {
  let component: GetContactDetailsComponent;
  let fixture: ComponentFixture<GetContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
