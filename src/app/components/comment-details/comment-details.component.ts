import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html'
})
export class CommentDetailsComponent implements OnInit{
  comment?: Comment

  constructor(private readonly _commentService: CommentService, private readonly _route: ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this._route.snapshot.params['id']!
    this._commentService.show(id).subscribe({
      next: comment => this.comment = comment
    })
  }
}
