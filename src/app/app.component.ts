import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yourPhone';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ro');
  }

  useLanguageRo() {
    this.translate.use('ro');
  }
  useLanguageEn() {
    this.translate.use('en');
  }
}
