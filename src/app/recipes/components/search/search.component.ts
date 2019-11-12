import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  pruebaForm: FormGroup;
  @Output() search = new EventEmitter<string>();

  constructor() {
    this.pruebaForm = new FormGroup({
      searchTerm: new FormControl('')
    });
    this.searching();
  }

  ngOnInit() {}

  searching() {
    this.searchTerm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((data: string) => {
        this.search.emit(data);
      });
  }
}
