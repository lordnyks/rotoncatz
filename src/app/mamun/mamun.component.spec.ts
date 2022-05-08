import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamunComponent } from './mamun.component';

describe('MamunComponent', () => {
  let component: MamunComponent;
  let fixture: ComponentFixture<MamunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MamunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
