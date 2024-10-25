import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponentComponent } from './bootstrap-component.component';

describe('BootstrapComponentComponent', () => {
  let component: BootstrapComponentComponent;
  let fixture: ComponentFixture<BootstrapComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapComponentComponent]
    });
    fixture = TestBed.createComponent(BootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
