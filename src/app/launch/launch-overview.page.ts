import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { LaunchParamStoreService } from './launch-param-store.service';


@Component({
  selector: 'app-launch-overview',
  templateUrl: './launch-overview.page.html',
  styleUrls: ['./launch-overview.page.scss'],
})
export class LaunchOverviewPage implements OnInit {
  title = 'Launches';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: LaunchParamStoreService) {
    if (store.startDate === undefined) {
      this.setStartToToday();
    }
    if (store.endDate === undefined) {
      this.setEndToInf();
    }
  }

  ngOnInit() {
    if (this.store.launches.length === 0) {
      this.loadFirst();
    }
  }

  async loadFirst() {
    this.store.launches = [];
    this.store.launches = (await this.service.getFirstLaunches(this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.agencyId)).launches;
  }

  async loadMore(event) {
    const answer = await this.service.getNextLaunches(this.store.launches.length, this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.agencyId);
    this.store.launches.push(...answer.launches);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.launches.length === answer.max) {
      event.target.disabled = true;
    }
  }
  toggleFilter() {
    this.store.showFilter = !this.store.showFilter
  }
  searchChange(event) {
    this.store.search = event.detail.value;
    this.loadFirst();
  }
  startChange(event) {
    this.store.startDate = new Date(event.detail.value);
    this.loadFirst();
  }
  startClear() {
    this.store.startDate = new Date('1950-01-01');
    this.loadFirst();
  }
  startToday() {
    this.setStartToToday();
    this.loadFirst();
  }
  endChange(event) {
    this.store.endDate = new Date(event.detail.value);
    this.loadFirst();
  }
  endClear() {
    this.setEndToInf();
    this.loadFirst();
  }
  endToday() {
    this.store.endDate = new Date(new Date().toISOString().split('T')[0]);
    this.loadFirst();
  }
  private setStartToToday() {
    this.store.startDate = new Date(new Date().toISOString().split('T')[0]);
  }
  private setEndToInf() {
    this.store.endDate = new Date('2050-12-31');
  }
}
