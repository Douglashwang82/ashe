import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBoxComponent } from './panel-box.component';

describe('PanelBoxComponent', () => {
  let component: PanelBoxComponent;
  let fixture: ComponentFixture<PanelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
