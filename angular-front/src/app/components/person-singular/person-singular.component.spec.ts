import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSingularComponent } from './person-singular.component';

describe('PersonSingularComponent', () => {
  let component: PersonSingularComponent;
  let fixture: ComponentFixture<PersonSingularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSingularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
