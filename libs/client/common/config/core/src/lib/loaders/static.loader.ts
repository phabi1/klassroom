import { ConfigLoader } from "../interfaces/config-loader.interface";

export class ConfigStaticLoader implements ConfigLoader {
    constructor(private settings: unknown) { }
    loadSettings(): Promise<unknown> {
        return Promise.resolve(this.settings);
    }
}