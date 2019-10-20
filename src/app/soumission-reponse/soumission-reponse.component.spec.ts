import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SoumissionReponseComponent } from './soumission-reponse.component';

describe('SoumissionReponseComponent', () => {
  let component: SoumissionReponseComponent;
  let fixture: ComponentFixture<SoumissionReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoumissionReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoumissionReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
