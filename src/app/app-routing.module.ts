import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { CertificateDetailComponent } from "./certificate-detail/certificate-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "certificates", component: CertificatesComponent },
  {
    path: "certificate/assets/:certificateImage",
    component: CertificateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
