import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosegriadoComponent } from './hosegriado.component';

describe('HosegriadoComponent', () => {
  let component: HosegriadoComponent;
  let fixture: ComponentFixture<HosegriadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosegriadoComponent]
    });
    fixture = TestBed.createComponent(HosegriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
