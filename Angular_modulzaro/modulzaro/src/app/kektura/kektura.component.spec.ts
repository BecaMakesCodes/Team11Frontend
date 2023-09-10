import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KekturaComponent } from './kektura.component';

describe('KekturaComponent', () => {
  let component: KekturaComponent;
  let fixture: ComponentFixture<KekturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KekturaComponent]
    });
    fixture = TestBed.createComponent(KekturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
