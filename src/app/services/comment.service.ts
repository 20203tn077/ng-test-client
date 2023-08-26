import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';
import { Comment } from '../interfaces/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  _commentListSubscription = new Subject<Comment[]>()
  _baseUrl = 'Comment'


  constructor(private readonly apiService: ApiService) {}

  index() {
    this.apiService.get<Comment[]>(this._baseUrl).subscribe({
      next: x => this._commentListSubscription.next(x)
    })
    return this._commentListSubscription
  }

  show(id: number) {
    return this.apiService.get<Comment>(`${this._baseUrl}/${id}`)
  }

  store(comment: Comment) {
    return this.apiService.post(this._baseUrl, comment)
  }

  update(comment: Comment) {
    return this.apiService.put(this._baseUrl, comment)
  }

  destroy(id: number) {
    return this.apiService.delete(`${this._baseUrl}/${id}`)
  }
}