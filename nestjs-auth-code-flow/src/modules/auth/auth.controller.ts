import { Body, Controller, Get, HttpCode, Post, Query, Redirect } from '@nestjs/common';
import { Unprotected } from 'nest-keycloak-connect';
import { AuthService } from './auth.service';
import { KeycloakToken } from './keycloack-token.model';

@Controller('auth')
export class AuthController {

    constructor(private _authService: AuthService) { }

    @Get('login')
    @Redirect('' , 301)
    @Unprotected()
    login() {
        return this._authService.getUrlLogin();
    }

    @Get('callback')
    @Unprotected()
    getAccessToken(@Query('code') code: string) {
        return this._authService.getAccessToken(code);
    }

    @Post('refreshToken')
    @Unprotected()
    refreshAccessToken(@Body() token: KeycloakToken) {
        return this._authService.refreshAccessToken(token.refresh_token)
    }

    @Post('logout')
    @HttpCode(204)
    logout(@Body() token: KeycloakToken){
        return this._authService.logout(token.refresh_token);
    }
}
