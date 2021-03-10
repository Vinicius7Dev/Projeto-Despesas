/**
 * Permission code config
 */

const config = {
    permissionCodes: {
        adm: process.env.APP_PERMISSION_CODE || 'default',
    },
};

export default config;
