import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChatbotsComponent } from './my-chatbots.component';

describe('MyChatbotsComponent', () => {
  let component: MyChatbotsComponent;
  let fixture: ComponentFixture<MyChatbotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChatbotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChatbotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
