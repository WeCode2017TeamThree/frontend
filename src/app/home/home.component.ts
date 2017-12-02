import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filters: BehaviorSubject<any> = new BehaviorSubject({});

  locations: any[] = [
    {
      feature_set: {
        restrooms: {},
        shower: {},
        charge_phone: {},
        wifi: {},
        laundry: {},
        camp: {}
      }
    },
    {
      feature_set: {
        wifi: {},
      }
    },
    {
      feature_set: {
        wifi: {}
      }
    }
  ];
  filteredLocations: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.setupFilterSubscription();
    // this.apiService.getLocations().subscribe(res => {
    // });
    
  }

  setupFilterSubscription() {
    this.filters.subscribe(next => {
      if (next.hasOwnProperty('feature_types') && next.feature_types.length > 0) {
        this.filterLocations();
      } else {
        this.filteredLocations = this.locations.slice();
      }
      console.log(this.filteredLocations);
    });
  }

  filterLocations() {
    this.filteredLocations = [];
    const filterValue = this.filters.value.feature_types;

    // console.log(filterValue);
    
    this.locations.forEach(location => {
      // console.log(this.intersect(Object.keys(location.feature_set), filterValue))
      if (this.intersect(location.feature_set, filterValue)) {
        this.filteredLocations.push(location);
      }
    });
  }

  intersect(a, b) {
    var result = false;
    for (var key in a) {
      console.log(b)
      if (b.includes(key)) { result = true; }
    }
    
    return result;
    // // console.log(a, b)
    // var ai=0, bi=0;
    // var result = new Array();
  
    // while( ai < a.length && bi < b.length )
    // {
    //    if      (a[ai] < b[bi] ){ ai++; }
    //    else if (a[ai] > b[bi] ){ bi++; }
    //    else {
    //      result.push(a[ai]);
    //      ai++;
    //      bi++;
    //    }
    // }
  
    // return result;
  }
}


