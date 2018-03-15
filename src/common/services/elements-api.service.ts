import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import "rxjs/add/observable/throw";
import { environment } from "../../environments/environment";
import { AuthDataStorage } from "../auth-data.storage";

export class ElementsApiService {
  private apiUrl = environment.apiEndpoint;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authDataStorage: AuthDataStorage,
    private onError: (err: Response) => void) {
  }

  get<T>(url: string, options?: any): Observable<T | any> {
    const opts = options || {};
    return this.http
      .get(`${this.apiUrl}/${url}`, opts)
      .pipe(
        catchError(this.onError.bind(this))
      );
  }

  post<T>(url: string, body: any, options?: any): Observable<T | any> {
    const opts = options || {};
    return this.http
      .post(`${this.apiUrl}/${url}`, body, opts)
      .pipe(
        catchError(this.onError.bind(this))
      );
  }

  put<T>(url: string, body: any, options?: any): Observable<T | any> {
    const opts = options || {};
    return this.http
      .put(`${this.apiUrl}/${url}`, body, opts)
      .pipe(
        catchError(this.onError.bind(this))
      );
  }
}
