import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBaseData} from "../../../../Core/Models/Interface/Base/base-data";
import {IProduct} from "../../../../Widgets/Model/Interface/Product/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = {} as IBaseData<IProduct>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.products = res['productList']
    })
  }

}
