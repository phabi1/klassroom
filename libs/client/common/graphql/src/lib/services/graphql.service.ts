import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GRAPHQL_OPTIONS } from '../constants/tokens';
import { GraphqlOptions } from '../interfaces/graphql-options.interface';

export function gql(stringPieces: TemplateStringsArray): string {
  return stringPieces.join('');
}

@Injectable()
export class GraphqlService {
  constructor(
    private readonly http: HttpClient,
    @Inject(GRAPHQL_OPTIONS) private options: GraphqlOptions
  ) { }

  fetch<T = any>(query: string, variables: object = {}): Observable<{ data: T }> {
    return this.http.post<{ data: T }>(this.options.endpoint, { query, variables });
  }
}
