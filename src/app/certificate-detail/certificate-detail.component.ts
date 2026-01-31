import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-certificate-detail',
    templateUrl: './certificate-detail.component.html',
    styleUrls: ['./certificate-detail.component.scss'],
    standalone: false
})
export class CertificateDetailComponent implements OnInit {
  certificateImage: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.certificateImage =
      'assets/' + this.route.snapshot.paramMap.get('certificateImage');
    console.log(this.certificateImage);
  }
}
