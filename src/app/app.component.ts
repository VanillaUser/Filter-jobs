import { Component, OnInit } from '@angular/core';
import { FilterJobsService } from './services/filter-jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  jobs: any[];

  constructor(
    private filterJobsService: FilterJobsService
  ) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void{
    this.jobs = this.filterJobsService.getAll();
  }
}
