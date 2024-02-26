import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsparentComponent } from './productsparent.component';

describe('ProductsparentComponent', () => {
  let component: ProductsparentComponent;
  let fixture: ComponentFixture<ProductsparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
