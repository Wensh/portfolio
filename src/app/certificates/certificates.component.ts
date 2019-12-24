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
        image: "assets/AT Computing C++.jpg",
        description: "AT Computing C++"
      },
      {
        image: "assets/Cognitive Computing.png",
        description: "Cognitive Computing"
      },
      {
        image: "assets/Ohio Business Course.jpg",
        description: "Business Course"
      },
      {
        image: "assets/Introduction to Swift Programming.pdf",
        description: "Introduction to Swift Programming"
      },
      {
        image: "assets/TMap.jpg",
        description: "TMap"
      },
      {
        image: "assets/iOS App Development Basics.pdf",
        description: "iOS App Development Basics"
      },
      {
        image: "assets/App Design and Development for iOS.pdf",
        description: "App Design and Development for iOS"
      }
    ];
  }

  openFullCertificateImage() {
    console.log("stuff");
  }
}
