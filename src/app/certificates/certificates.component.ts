import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-certificates",
  templateUrl: "./certificates.component.html",
  styleUrls: ["./certificates.component.scss"]
})
export class CertificatesComponent implements OnInit {
  certificateImages = [];
  constructor() {}

  ngOnInit() {
    this.certificateImages = [
      {
        image: "assets/at_computing_cpp.jpg",
        description: "AT Computing C++"
      },
      {
        image: "assets/cognitive_computing.png",
        description: "Cognitive Computing"
      },
      {
        image: "assets/ohio_business_course.jpg",
        description: "Business Course"
      },
      {
        image: "assets/introduction_to_swift_programming.pdf",
        description: "Introduction to Swift Programming"
      },
      {
        image: "assets/tmap.jpg",
        description: "TMap"
      },
      {
        image: "assets/ios_app_development_basics.pdf",
        description: "iOS App Development Basics"
      },
      {
        image: "assets/app_design_and_development_for_ios.pdf",
        description: "App Design and Development for iOS"
      }
    ];
  }
}
