import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @Input() job: any;

  constructor() { }

  ngOnInit(): void {
  }

}
