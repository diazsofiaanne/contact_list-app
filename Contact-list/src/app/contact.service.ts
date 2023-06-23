import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  userData: any;

  homeFetchStatus: boolean = false;

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  createPost(newUser: any) {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/users',

      newUser
    );
  }

  getUser(id: any) {
    return this.http.get<any>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }

  updatePost(id: any, value: any) {
    return this.http.put<any>(
      'https://jsonplaceholder.typicode.com/users/' + id,

      value
    );
  }

  deletePost(id: any) {
    return this.http.delete<any>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }

  copyUser(data: any) {
    this.userData = data;
  }

  fetchStatus(status: boolean) {
    this.homeFetchStatus = status;
  }

  passStatus() {
    return this.homeFetchStatus;
  }

  storeData() {
    return this.userData;
  }
}
