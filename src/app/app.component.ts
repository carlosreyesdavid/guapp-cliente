import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { LocalListComponent } from './local-list/local-list.component'
import { LoginComponent } from './login/login.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent,LocalListComponent,LoginComponent]
})

export class AppComponent {
  title = 'GuApp!';
}
