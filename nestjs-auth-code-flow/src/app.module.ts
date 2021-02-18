import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard, KeycloakConnectModule, RoleGuard } from 'nest-keycloak-connect';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';

const keyCloakOptionsProvider =  {
  provide: 'keyCloakDataProvider',
  useFactory: (config: ConfigService) => {
    return {
      authServerUrl: config.get('KEYCLOAK_AUTH_URI'),
      realm: config.get('KEYCLOAK_REALM'),
      clientId: config.get('KEYCLOAK_CLIENT_ID'),
      secret: config.get('KEYCLOAK_CLIENT_SECRET')
    }
  },
  inject: [ ConfigService],
};

@Module({
  imports: [
    KeycloakConnectModule.registerAsync(keyCloakOptionsProvider),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
