import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTemplateComponent } from './reference-template.component';

describe('ReferenceTemplateComponent', () => {
  let component: ReferenceTemplateComponent;
  let fixture: ComponentFixture<ReferenceTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceTemplateComponent]
    });
    fixture = TestBed.createComponent(ReferenceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
