import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDisplayComponent } from './output-display.component';

describe('OutputDisplayComponent', () => {
  let component: OutputDisplayComponent;
  let fixture: ComponentFixture<OutputDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
