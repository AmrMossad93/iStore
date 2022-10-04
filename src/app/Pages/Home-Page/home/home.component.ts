import {Component, OnInit} from '@angular/core';
import {GraphQLService} from "../../../Core/Services/GraphQL/graph-ql.service";
import {GET_CARTS} from "../../../Core/Models/GraphQL/Queries/GetCarts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
