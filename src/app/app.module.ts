import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { MdcImageListModule } from "@angular-mdc/web";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { MenuOverviewComponent } from "./menu-overview/menu-overview.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CertificatesComponent,
    MenuOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MdcImageListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
