import { ConfigService } from "@klassroom/client/common/config/core";
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';

export interface KeycloakConfig {
    endpoint: string;
    realm: string;
    clientId: string;
}

export function initializeKeycloak(keycloak: KeycloakService, configService: ConfigService) {

    keycloak.keycloakEvents$.subscribe({
        next(event) {
            if (event.type == KeycloakEventType.OnTokenExpired) {
                keycloak.updateToken(20);
            }
        }
    });

    return () => configService.init()
        .then(() => {
            return new Promise<void>((resolve) => {
                keycloak.keycloakEvents$.subscribe({
                    next: (event) => {
                        if (event.type === KeycloakEventType.OnReady) {
                            resolve();
                        }
                    }
                });
                const config = configService.getSettings<KeycloakConfig>('keycloak');
                keycloak.init({
                    config: {
                        url: config.endpoint,
                        realm: config.realm,
                        clientId: config.clientId
                    },
                    initOptions: {
                        onLoad: 'check-sso',
                        silentCheckSsoRedirectUri:
                            window.location.origin + '/assets/silent-check-sso.html'
                    }
                });
            })
        });
}