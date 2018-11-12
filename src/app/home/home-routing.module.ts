import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontPageComponent} from "./front-page/front-page.component";

const homeRoutes: Routes = [
  {path: '', component: FrontPageComponent},
  {path: 'home', component: FrontPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
