import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensCollactionComponent } from './mens-collaction.component';

describe('MensCollactionComponent', () => {
  let component: MensCollactionComponent;
  let fixture: ComponentFixture<MensCollactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensCollactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensCollactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
