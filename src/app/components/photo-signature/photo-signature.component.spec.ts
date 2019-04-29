import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSignatureComponent } from './photo-signature.component';

describe('PhotoSignatureComponent', () => {
  let component: PhotoSignatureComponent;
  let fixture: ComponentFixture<PhotoSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
