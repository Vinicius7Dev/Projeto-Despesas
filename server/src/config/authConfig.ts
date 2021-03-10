/**
 * Authentication configuration
 */

const config = {
    token: {
        secret: process.env.APP_JWT_TOKEN_SECRET || 'default',
        expiresIn: process.env.APP_JWT_TOKEN_EXPIRESIN || '1d',
    },
};

export default config;
