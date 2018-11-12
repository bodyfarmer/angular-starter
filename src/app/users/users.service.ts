import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user.interface';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';
const APIEndpoint = environment.APIEndpoint;


@Injectable()

export class UsersService {

  private userUrl = `${APIEndpoint}/users`;
  private signInUrl = `${APIEndpoint}/auth/login`;

  constructor(private http: HttpClient) {
  }

  /**
   * Sign up to the application
   *
   * @return {Observable}
   */

  public signUp(user: User) {
    return this.http.post(this.userUrl, user);
  }

  /**
   * Login to the application
   *
   * @param {string} username The user's log-in email
   * @param {string} password The user's log-in password
   * @return {Observable}
   */

  public signIn(username: string, password: string) {
    return this.http.post(this.signInUrl, {username, password});
  }

  /**
   * Find Users
   *
   * @return {Observable}
   */
  public getUsers(params): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, {params});
  }

  public getUser(id: string): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }

  /** PUT: update the user on the server */
  public updateUser(user: User, id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(`${this.userUrl}/${id}`, user, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  public deleteUser(user: User | string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }
}
