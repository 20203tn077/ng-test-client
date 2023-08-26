import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentRegisterComponent } from './components/comment-register/comment-register.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentUpdateComponent } from './components/comment-update/comment-update.component';

const routes: Routes = [
  { path: 'comentarios', component: CommentListComponent },
  { path: 'comentarios/nuevo', component: CommentRegisterComponent },
  { path: 'comentarios/:id', component: CommentDetailsComponent },
  { path: 'comentarios/:id/actualizar', component: CommentUpdateComponent },
  { path: '**', redirectTo: '/comentarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
