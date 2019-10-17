import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawzoneComponent } from './drawzone.component';

describe('DrawzoneComponent', () => {
  let component: DrawzoneComponent;
  let fixture: ComponentFixture<DrawzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
