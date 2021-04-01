/**
 * Access Credentials
 */

const config = {
    adm: {
        username: process.env.ADM_USERNAME || 'default',
        password: process.env.ADM_PASSWORD || 'default',
    },
};

export default config;
