import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pager } from '../../models/pager';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  pager = new Pager();

  @Output() nextPage = new EventEmitter();
  @Output() previousPage = new EventEmitter();
  @Output() changeItemsPerPage = new EventEmitter();

  @Input()
  set setPager(pager: Pager) {
    if (pager !== undefined) {
      this.pager = pager;
    }
  }

  get setPager(): Pager {
    return this.pager;
  }

  constructor() { }

  ngOnInit() {
  }

  calcNumberInit() {
    return (this.pager.currentPage * this.pager.numberPerPage) + 1;
  }

  calcNumberEnd() {
    return (this.pager.currentPage * this.pager.numberPerPage) + this.pager.numberPerPage;
  }

  selectNumberPerPage() {
    this.pager.currentPage = 0;
    this.changeItemsPerPage.emit(this.pager);
  }

  previous() {
    if(this.calcNumberInit() > 1)
      this.previousPage.emit(this.pager);
  }

  next() {
    if(this.calcNumberEnd() < this.pager.numberOfItems)
      this.nextPage.emit(this.pager);
  }

}
