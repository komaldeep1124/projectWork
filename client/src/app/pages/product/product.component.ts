import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authservice: AuthService
    ) {
    super(route);
  }

  ngOnInit() {
  }

  isLoggedIn():boolean {
    return this.authservice.LoggedIn();
  }

}
