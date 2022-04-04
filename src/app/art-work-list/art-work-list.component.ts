import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-art-work-list',
  templateUrl: './art-work-list.component.html',
  styleUrls: ['./art-work-list.component.scss']
})
export class ArtWorkListComponent implements OnInit {
  constructor(private commonService: CommonService) { }

  isDataLoading: boolean = false;
  totalRecords: any = 0;
  ArtworksData: any;
  allArtData: any = [];
  stylesTitles: any = [];
  artist_title: any;
  allArtworksDetails: any = [];
  model: number[] = [];
  sortOptions: string[] = ['Name', 'Artist', 'Date'];
  count: number = 0;
  page: number = 1;
  perPage: number = 8;
  enablePagination: boolean = false;

  ngOnInit(): void {
      let initialPageNumber = 1;
      this.getArtworksData(initialPageNumber);
  }

  //Pagination code
  prevPage() {
      let prevPageValue = this.page--;
      this.getArtworksData(prevPageValue);
  }

  nextPage() {
      let nextPageValue = this.page++;
      this.getArtworksData(nextPageValue);
  }

  goToPage(n: number) {
      this.page = n;
      this.getArtworksData(this.page);
  }

  //Form Creation
  public artGalleryInputForm: FormGroup = new FormGroup({
      styleTitlesDropdown: new FormControl('',),
      sortArtDetailsDropdown: new FormControl('',)
  });

  //Dropdown selected values
  selectLabel(option: any): string {
      return option.name;
  }

  selectValue(option: any): number {
      return option.id;
  }


  //get all artwork data
  getArtworksData(pageNumber?: any) {
      this.isDataLoading = true;
      this.stylesTitles = [];
      const urlTypeWithParam = '//api.artic.edu/api/v1/artworks?limit=8&page=' + pageNumber;
      this.commonService.getRecords(urlTypeWithParam).subscribe(res => {
          this.isDataLoading = false;
          this.ArtworksData = res;
          this.allArtData = res.data;
          this.allArtworksDetails = this.allArtData;
          this.totalRecords = this.ArtworksData.pagination.total;
          this.enablePagination = true;
          this.count = this.totalRecords;
          let b: any = {};
          //fetching style titles from response to bind distinct values in dropdown
          this.allArtData.forEach((el: any) => {
              b[el.style_title] = (b[el.style_title] || 0) + 1;
          });
          const objectArray = Object.entries(b);
          //adding format to display in style title dropdown
          objectArray.forEach(([key, value]) => {
              let keyValue = key + " (" + value + ")";
              this.stylesTitles.push({ "id": key, "name": keyValue });
          });
      }, error => {
          this.ArtworksData = [];
          this.isDataLoading = false;
      });

  }

  onStyleTitleDropdownSelect(event: any) {
      this.allArtworksDetails = this.allArtData.filter((r: any) => event.includes(r.style_title));
  }

  onSortDropdownSelect(event: any) {
      if (event.includes('Name')) {
          this.allArtworksDetails.sort((a: any, b: any) => a.title.localeCompare(b.title));
      }
      if (event.includes('Artist')) {
          this.allArtworksDetails.sort((a: any, b: any) => a.artist_title.localeCompare(b.artist_title));
      }
      if (event.includes('Date')) {
          this.allArtworksDetails.sort((a: any, b: any) => a.date_start - b.date_start);
      }
  }

}
