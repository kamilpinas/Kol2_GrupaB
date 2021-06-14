import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPForumDetailsComponent } from './kp-forum-details.component';

describe('KPForumDetailsComponent', () => {
  let component: KPForumDetailsComponent;
  let fixture: ComponentFixture<KPForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KPForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
