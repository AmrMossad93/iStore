import {Component, OnInit} from '@angular/core';
import {GraphQLService} from "../../../Core/Services/GraphQL/graph-ql.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private graphQLService: GraphQLService) {
  }

  ngOnInit(): void {
    this.graphQLService.get()
  }

}
