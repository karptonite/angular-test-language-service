import { Component } from '@angular/core';
import { TestService } from '@app/test.service';
// If I use a relative path, below, I don't get a language service error
// import { TestService } from './test.service';

// Error:(7, 2) Angular: Can't resolve all parameters for AppComponent in /Users/karp/Documents/git/angular-test-language-service/src/app/app.component.ts: (?).
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private testService: TestService ) {}
}
