import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-certificates",
  templateUrl: "./certificates.component.html",
  styleUrls: ["./certificates.component.css"]
})
export class CertificatesComponent implements OnInit {
  cpp = "assets/AT Computing C++.jpg";
  cognitiveComputing = "assets/Cognitive Computing.png";
  businessCourse = "assets/Ohio Business Course.jpg";
  tmap = "assets/TMap.jpg";
  constructor() {}

  ngOnInit() {}
}
