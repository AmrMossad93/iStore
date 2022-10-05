import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBaseData} from "../../../../Core/Models/Interface/Base/base-data";
import {ICatalogue} from "../../Model/Interface/catalogue";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  catalogueList = {} as IBaseData<ICatalogue>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.catalogueList = res['cataloguesList']
    })
  }

}
