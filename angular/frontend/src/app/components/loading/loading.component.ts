import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public selectedLoading = 0;

  constructor() {
    this.selectedLoading = Math.floor((Math.random() * 3));
  }

  ngOnInit() {
  }

}
