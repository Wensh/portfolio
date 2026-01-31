import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: "app-certificates",
    templateUrl: "./certificates.component.html",
    styleUrls: ["./certificates.component.scss"],
    standalone: false
})
export class CertificatesComponent implements OnInit {
  certificateImages: { image: string; description: string }[] = [];
  columns!: number;

  @HostListener("window:resize") calculateColumns() {
    this.columns = Math.floor(window.innerWidth / 460) || 1;
  }

  constructor() {
    this.calculateColumns();
  }

  ngOnInit() {
    this.certificateImages = [
      {
        image: "assets/at_computing_cpp.jpg",
        description: "AT Computing C++",
      },
      {
        image: "assets/cognitive_computing.png",
        description: "Cognitive Computing",
      },
      {
        image: "assets/ohio_business_course.jpg",
        description: "Business Course",
      },
      {
        image: "assets/introduction_to_swift_programming.jpg",
        description: "Introduction to Swift Programming",
      },
      {
        image: "assets/objective_c_for_beginners.jpg",
        description: "Objective C for beginners",
      },
      {
        image: "assets/c_programming_ios_development.jpg",
        description: "C Programming iOS Development Starts Here",
      },
      {
        image: "assets/tmap.jpg",
        description: "TMap",
      },
      {
        image: "assets/ios_app_development_basics.jpg",
        description: "iOS App Development Basics",
      },
      {
        image: "assets/app_design_and_development_for_ios.jpg",
        description: "App Design and Development for iOS",
      },
      {
        image: "assets/profibus.jpg",
        description: "Certified PROFIBUS Engineer",
      },
      {
        image: "assets/angular_the_complete_guide.jpg",
        description: "Angular - The Complete Guide",
      },
      {
        image: "assets/bootstrap.jpg",
        description: "Bootstrap 4",
      },
      {
        image: "assets/simulink_state_flow_1.jpg",
        description: "Simulink and Stateflow for Logic-Driven System Modeling day 1",
      },
      {
        image: "assets/simulink_state_flow_2.jpg",
        description: "Simulink and Stateflow for Logic-Driven System Modeling day 2",
      },
      {
        image: "assets/Csharp_Fundamentals.jpg",
        description: "C# 10 Fundamentals",
      },
    ];
  }
}
