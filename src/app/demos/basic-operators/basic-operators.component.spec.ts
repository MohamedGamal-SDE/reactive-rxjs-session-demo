import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperatorsComponent } from './basic-operators.component';

describe('BasicOperatorsComponent', () => {
  let component: BasicOperatorsComponent;
  let fixture: ComponentFixture<BasicOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicOperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
