import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  @Output()search = new EventEmitter<string>();

  constructor() {
    this.searching();
   }

  ngOnInit() {
  }

  searching() {
    this.searchTerm.valueChanges.pipe(debounceTime(400))
    .subscribe((data: string) => {
      this.search.emit(data);
    });
  }

}
