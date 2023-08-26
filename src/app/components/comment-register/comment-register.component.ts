import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-register',
  templateUrl: './comment-register.component.html'
})
export class CommentRegisterComponent {
  commentForm: FormGroup;

  constructor(builder: FormBuilder, private readonly _commentService: CommentService, private readonly _router: Router){
    this.commentForm = builder.group({
      title:['', Validators.required],
      description:['', Validators.required],
      author: ['', Validators.required]
    })
  }

  registerComment(){    
    this._commentService.store(this.commentForm.value).subscribe({
      next: () => this._router.navigateByUrl('/comentarios')
    })
  }
}
