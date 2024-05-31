import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetedSearchComponent } from './faceted-search.component';

describe('FacetedSearchComponent', () => {
  let component: FacetedSearchComponent;
  let fixture: ComponentFixture<FacetedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacetedSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacetedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
