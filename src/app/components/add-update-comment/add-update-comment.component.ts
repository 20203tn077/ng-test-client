import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Comment } from 'src/app/interfaces/Comment'

@Component({
  selector: 'app-add-update-comment',
  templateUrl: './add-update-comment.component.html'
})
export class AddUpdateCommentComponent {
  formComment: FormGroup;

  constructor(private fb: FormBuilder){
    this.formComment = this.fb.group({
      title:['', Validators.required],
      description:['', Validators.required],
      author: ['', Validators.required]
    })
  }

  addComment(){
    console.log(this.formComment);
    const comment: Comment = {
      title: this.formComment.get('title')?.value,
      description: this.formComment.get('description')?.value,
      author: this.formComment.get('author')?.value,
      createdAt: new Date(),
    }
    console.log(comment)
  }
}
