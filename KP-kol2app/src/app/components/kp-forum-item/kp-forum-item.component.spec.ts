import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPForumItemComponent } from './kp-forum-item.component';

describe('KPForumItemComponent', () => {
  let component: KPForumItemComponent;
  let fixture: ComponentFixture<KPForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KPForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
