import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = []

  constructor(private readonly _commentService: CommentService) {}

  ngOnInit(): void {
    this._commentService.index().subscribe({
      next: comments => this.comments = comments
    })
  }

  destroyComment(id: number) {
    this._commentService.destroy(id).subscribe({
      next: () => this._commentService.index()
    })
  }
}
