import { Inject, Injectable } from '@angular/core';
import { ConfigLoader } from '../interfaces/config-loader.interface';
import { CONFIG_LOADER } from '../constants/tokens';

@Injectable()
export class ConfigService {

  private settings: unknown = null;
  private callbacks: (() => void)[] = [];

  constructor(@Inject(CONFIG_LOADER) private loader: ConfigLoader) { }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.callbacks.push(resolve);
      if (this.callbacks.length === 1) {
        this.loader.loadSettings()
          .then(settings => this.settings = settings)
          .then(() => {
            this.callbacks.forEach(callback => callback());
          })
          .catch(err => reject(err))
      }
    });
  }

  public getSettings<T = unknown>(key?: string | string[], defaultValue?: T): T {
    if (!key || (Array.isArray(key) && !key[0])) {
      return this.settings as T;
    }

    const paths = !Array.isArray(key) ? key.split('.') : key;

    let result = paths.reduce((acc: any, current: string) => acc && acc[current], this.settings);

    if (result === undefined) {
      result = defaultValue;

      if (result === undefined) {
        throw new Error(`No setting found with the specified key [${paths.join('/')}]!`);
      }
    }

    return result as T;
  }
}
