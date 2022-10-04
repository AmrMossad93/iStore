import {Component, OnInit} from '@angular/core';
import {GraphQLService} from "../../../Core/Services/GraphQL/graph-ql.service";
import {GET_CARTS} from "../../../Core/Models/GraphQL/Queries/GetCarts";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private graphQLService: GraphQLService) {
  }

  ngOnInit(): void {
    this.graphQLService.get(GET_CARTS).subscribe((res: any) => {
      console.log(res)
    })
  }

}
