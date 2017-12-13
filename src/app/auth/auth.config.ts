
// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'HSBrZ3Oi2t6AAA8G1I9SBtvKfjvEq6mH',
  CLIENT_DOMAIN: 'ral.auth0.com/',
  AUDIENCE: 'http://localhost:8083/api/', // likely http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};
