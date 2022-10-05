import {Component, Input, OnInit} from '@angular/core';
import {ICatalogueList} from "../../../Layouts/Main/Model/Interface/catalogue";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() catalogueList: ICatalogueList[] = []

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onNavigateToProductList(catalogueId: string): void {
    this.router.navigate(['products', catalogueId])
  }
}
