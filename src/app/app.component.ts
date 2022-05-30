import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public constructor(private titleService: Title) {
    this.setTitle(this.title)
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  title = 'Johannes Copeland';
  githubProfile = "'https://github.com/johannescopeland'"

  // Font Awesome Icons
  faGithub = faGithub;
  faMedium = faMedium;
  faTwitter = faTwitter;

}
