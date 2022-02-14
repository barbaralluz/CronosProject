import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post/post.model';
import { environment } from 'src/environments/environment';

const baseUrl =  environment.baseUrl + '/api/Post/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl + 'GetAllPosts');
  }

  get(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}Get?postId=${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + 'AddPost', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}UpdatePost?postId=${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}DeletePost?postId=${id}`);
  }

}
