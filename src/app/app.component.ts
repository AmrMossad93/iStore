import {Component, OnInit} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {LoaderService} from "./Core/Services/Loader/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iStore';

  constructor(private router: Router, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
