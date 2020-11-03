import { Injectable } from '@angular/core';
import jobsList from '../../assets/_files/data.json';

@Injectable({
  providedIn: 'root'
})
export class FilterJobsService {

  jobs: any[] = jobsList;
  data: any[];

  filterList: string[] = [];

  constructor() { }

  getAll(): any[]{
    if (this.filterList.length !== 0){
      this.filterList.forEach(f => this.filter(f));
      return this.data;
    }
    return this.jobs;
  }

  private filter(filter: string = null): any{
    if (filter != null) {
      this.data = this.jobs.filter(x => {
        // tslint:disable-next-line: max-line-length
        return x.role === filter || x.level === filter || x.languages.indexOf(filter) > -1 || x.tools.indexOf(filter) > -1;
      });
      console.log(this.data);
    }
  }

  setFilter(filter: string= null): void{
    this.filterList.push(filter);
  }

  deleteFilter(filter: string= null): void{
    this.filterList = this.filterList.filter(f => f === filter);
  }

}
