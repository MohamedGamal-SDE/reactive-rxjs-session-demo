import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalsComponent } from './fundamentals.component';

describe('FundamentalsComponent', () => {
  let component: FundamentalsComponent;
  let fixture: ComponentFixture<FundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
