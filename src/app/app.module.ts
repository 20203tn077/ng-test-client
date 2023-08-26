import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { CommentListComponent } from './components/comment-list/comment-list.component'
import { CommentDetailsComponent } from './components/comment-details/comment-details.component'
import { CommentUpdateComponent } from './components/comment-update/comment-update.component';
import { CommentRegisterComponent } from './components/comment-register/comment-register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommentListComponent,
    CommentDetailsComponent,
    CommentUpdateComponent,
    CommentRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
