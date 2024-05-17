import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowBlackIconComponent } from './arrow-black-icon.component';

describe('ArrowBlackIconComponent', () => {
  let component: ArrowBlackIconComponent;
  let fixture: ComponentFixture<ArrowBlackIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArrowBlackIconComponent]
    });
    fixture = TestBed.createComponent(ArrowBlackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
