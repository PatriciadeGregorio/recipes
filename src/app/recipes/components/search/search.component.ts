import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Increment } from 'src/app/stores/counter.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  @Output() search = new EventEmitter<string>();

  constructor(private store: Store<{ count: number }>) {
    this.searching();
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(new Increment());
  }

  searching() {
    this.searchTerm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((data: string) => {
        this.search.emit(data);
      });
  }
}
