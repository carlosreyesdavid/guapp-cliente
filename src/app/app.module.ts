import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'

import { AppComponent }         from './app.component'
import { LocalListComponent } from './local-list/local-list.component'
import { LoginComponent } from './login/login.component'

import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LocalListComponent,
    LoginComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
