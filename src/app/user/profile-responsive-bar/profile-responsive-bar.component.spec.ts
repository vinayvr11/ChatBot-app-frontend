import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileResponsiveBarComponent } from './profile-responsive-bar.component';

describe('ProfileResponsiveBarComponent', () => {
  let component: ProfileResponsiveBarComponent;
  let fixture: ComponentFixture<ProfileResponsiveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileResponsiveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileResponsiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
