import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../node_modules/primeicons/primeicons.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/primeng/resources/themes/nova-colored/theme.css',
    './app.component.scss',
  ]
})
export class AppComponent {
  constructor(private router: Router,
  ) {
  }
  public onLogOut() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }

  public isLoggedIn() {
    return localStorage.getItem('id_token') !== null;
  }
}
