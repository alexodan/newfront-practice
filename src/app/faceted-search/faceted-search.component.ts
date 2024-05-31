import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

type FormConfig = {
  rooms: number;
  petFriendly: boolean;
  location: {
    zipCode: string;
  };
};

@Component({
  selector: 'app-faceted-search',
  standalone: true,
  imports: [],
  templateUrl: './faceted-search.component.html',
  styleUrl: './faceted-search.component.scss',
})
export class FacetedSearchComponent {
  fb: FormBuilder;

  constructor() {
    this.fb = new FormBuilder();
  }
}
