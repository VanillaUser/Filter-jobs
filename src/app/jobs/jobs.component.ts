import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @Input() job: any;

  mobile = false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width === (320)) { // 768px portrait
      this.mobile = true;
    }
  }

}
