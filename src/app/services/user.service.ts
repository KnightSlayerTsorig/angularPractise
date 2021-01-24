
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable <IUser[]> {
    return this
      .httpClient
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}