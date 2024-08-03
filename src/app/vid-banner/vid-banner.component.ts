import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vid-banner',
  templateUrl: './vid-banner.component.html',
  styleUrl: './vid-banner.component.css'
})
export class VidBannerComponent implements AfterViewInit {

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.muted = true; // Ensure the video is muted
  }
}
