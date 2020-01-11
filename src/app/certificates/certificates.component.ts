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
        image: "assets/introduction_to_swift_programming.jpg",
        description: "Introduction to Swift Programming"
      },
      {
        image: "assets/objective_c_for_beginners.jpg",
        description: "Objective C for beginners"
      },
      {
        image: "assets/c_programming_ios_development.jpg",
        description: "C Programming iOS Development Starts Here"
      },
      {
        image: "assets/tmap.jpg",
        description: "TMap"
      },
      {
        image: "assets/ios_app_development_basics.jpg",
        description: "iOS App Development Basics"
      },
      {
        image: "assets/app_design_and_development_for_ios.jpg",
        description: "App Design and Development for iOS"
      },
      {
        image: "assets/profibus.jpg",
        description: "Certified PROFIBUS Engineer"
      }
    ];
  }
}
