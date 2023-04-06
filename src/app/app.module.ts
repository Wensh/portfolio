import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MenuOverviewComponent } from "./menu-overview/menu-overview.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { CertificateDetailComponent } from "./certificate-detail/certificate-detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MasonryPipe } from "./common/masonry.pipe";

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuOverviewComponent, CertificatesComponent, CertificateDetailComponent, MasonryPipe],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
