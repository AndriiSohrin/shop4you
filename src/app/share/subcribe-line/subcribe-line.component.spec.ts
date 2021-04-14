import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcribeLineComponent } from './subcribe-line.component';

describe('SubcribeLineComponent', () => {
  let component: SubcribeLineComponent;
  let fixture: ComponentFixture<SubcribeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcribeLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcribeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
