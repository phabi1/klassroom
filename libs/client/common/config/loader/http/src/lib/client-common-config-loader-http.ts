import { HttpClient } from '@angular/common/http';
import { ConfigLoader } from "@klassroom/client/common/config/core";

export class ConfigHttpLoader implements ConfigLoader {

  private endpoint: string;

  constructor(private readonly httpClient: HttpClient, endpoint?: string) {
    this.endpoint = endpoint ?? '/assets/config.json';
  }

  loadSettings(): Promise<unknown> {
    return new Promise((resolve, reject) => this.httpClient.get<unknown>(this.endpoint).subscribe({
      next: (settings) => resolve(settings),
      error: () => reject('Endpoint unreachable!')
    }));
  }
}