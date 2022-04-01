import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$ !: Observable<User>;
  authenticated$!: Observable<boolean>;

}
