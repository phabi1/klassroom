import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export function gql(stringPieces: TemplateStringsArray): string {
  return stringPieces.join('')
}

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private readonly http: HttpClient) { }

  fetch<T = any>(query: string, variables: object = {}): Observable<T> {
    return this.http.post<T>('/graphql', { query, variables })
  }
}
