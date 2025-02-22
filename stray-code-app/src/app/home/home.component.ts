import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private cookieService: CookieService) {}


  ngOnInit(){
    console.log("cookie ID",this.cookieService.get('id'));
    console.log("cookie token",this.cookieService.get('token'));
  }
}
