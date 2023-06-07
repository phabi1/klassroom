import { HttpClient } from '@angular/common/http';
import { ConfigHttpLoader } from '@klassroom/client/common/config/loader/http';

export function configFactory(httpClient: HttpClient) {
    return new ConfigHttpLoader(httpClient);
}