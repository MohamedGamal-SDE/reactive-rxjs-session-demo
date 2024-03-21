import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighOrderMappingComponent } from './high-order-mapping.component';

describe('HighOrderMappingComponent', () => {
  let component: HighOrderMappingComponent;
  let fixture: ComponentFixture<HighOrderMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighOrderMappingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighOrderMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
