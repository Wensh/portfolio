import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxImageZoomModule } from "ngx-image-zoom";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CertificatesComponent } from "./certificates/certificates.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, CertificatesComponent],
  imports: [BrowserModule, AppRoutingModule, NgxImageZoomModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
