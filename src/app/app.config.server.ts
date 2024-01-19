import { mergeApplicationConfig, ApplicationConfig, Injectable } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

export const config = mergeApplicationConfig(appConfig, serverConfig);
