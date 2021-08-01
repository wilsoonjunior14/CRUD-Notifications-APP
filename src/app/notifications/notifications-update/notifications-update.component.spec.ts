import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsUpdateComponent } from './notifications-update.component';

describe('NotificationsUpdateComponent', () => {
  let component: NotificationsUpdateComponent;
  let fixture: ComponentFixture<NotificationsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
