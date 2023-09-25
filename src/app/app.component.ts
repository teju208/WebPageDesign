import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "(window:click)":
      "onclick()"
  }
})
export class AppComponent implements OnInit {
  title = 'my-first-task';
  products: any = [];
  items: any;
  first: number = 0;
  rows: number = 10;
  options: any;
  first2: number = 0;
  rows2: number = 10;
  selectedCity: any = [];
  cities: any = [];
  navbarCollapsed = true;

  constructor() {

  }


  ngOnInit() {
    this.options = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 120, value: 120 }
    ];

    this.products = [
      {
        SrNo: '1',
        Date: 'Data Structure',
        PO: 'P0-001',
        Reference: 'Cheque 1253',
        Vendor: 'UGVCL',
        Status: 'Draft',
        Amount: '2,537,58',
        date: 'Jul 22,2023'

      },
      {
        SrNo: '2',
        Date: 'Data Structure',
        PO: 'P0-001',
        Reference: 'Cheque 1253',
        Vendor: 'UGVCL',
        Status: 'Draft',
        Amount: '2,537,58',
        date: 'Jul 22,2023'

      },

      {
        SrNo: '3',
        Date: 'Data Structure',
        PO: 'P0-001',
        Reference: 'Cheque 1253',
        Vendor: 'UGVCL',
        Status: 'Draft',
        Amount: '2,537,58',
        date: 'Jul 22,2023'

      },
      {

        SrNo: '4',
        Date: 'Data Structure',
        PO: 'P0-001',
        Reference: 'Cheque 1253',
        Vendor: 'UGVCL',
        Status: 'Draft',
        Amount: '2,537,58',
        date: 'Jul 22,2023'

      },
      {
        SrNo: '5',
        Date: 'Data Structure',
        PO: 'P0-001',
        Reference: 'Cheque 1253',
        Vendor: 'UGVCL',
        Status: 'Draft',
        Amount: '2,537,58',
        date: 'Jul 22,2023'

      },
      {
        SrNo: '6',
        Date: 'Data Structure',
        PO: 'P0-001',
        Reference: 'Cheque 1253',
        Vendor: 'UGVCL',
        Status: 'Draft',
        Amount: '2,537,58',
        date: 'Jul 22,2023'

      },

    ];

  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
