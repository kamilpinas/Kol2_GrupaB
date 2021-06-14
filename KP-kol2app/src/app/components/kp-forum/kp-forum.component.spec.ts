import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPForumComponent } from './kp-forum.component';

describe('KPForumComponent', () => {
  let component: KPForumComponent;
  let fixture: ComponentFixture<KPForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KPForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
