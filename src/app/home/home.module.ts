import {NgModule} from "@angular/core";
import {FrontPageComponent} from "./front-page/front-page.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  imports: [HomeRoutingModule],
  exports: [],
  declarations: [
    FrontPageComponent
  ]
})

export class HomeModule {

}
