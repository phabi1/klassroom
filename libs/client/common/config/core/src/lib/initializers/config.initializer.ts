import { ConfigService } from "../services/config.service";

export function initializeConfig(configService: ConfigService) {
    return () => configService.init();
}