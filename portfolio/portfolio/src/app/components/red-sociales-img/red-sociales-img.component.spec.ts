import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSocialesImgComponent } from './red-sociales-img.component';

describe('RedSocialesImgComponent', () => {
  let component: RedSocialesImgComponent;
  let fixture: ComponentFixture<RedSocialesImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSocialesImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedSocialesImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
