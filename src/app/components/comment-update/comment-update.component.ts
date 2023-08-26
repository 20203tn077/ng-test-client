import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html'
})
export class CommentUpdateComponent implements OnInit{
  commentForm: FormGroup;
  comment?: Comment

  constructor(builder: FormBuilder, private readonly _commentService: CommentService, private readonly _router: Router, private readonly _route: ActivatedRoute){
    this.commentForm = builder.group({
      title:['', Validators.required],
      description:['', Validators.required],
      author: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id']!
    this._commentService.show(id).subscribe({
      next: comment => {
        this.comment = comment
        this.commentForm.get('title')?.setValue(comment.title)
        this.commentForm.get('description')?.setValue(comment.description)
        this.commentForm.get('author')?.setValue(comment.author)
      }
    })
  }

  updateComment(){    
    this._commentService.update({...this.comment, ...this.commentForm.value}).subscribe({
      next: () => this._router.navigateByUrl('/comentarios')
    })
  }
}
