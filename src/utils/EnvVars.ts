export default {
    keys: {
        CAPTAIN_DOCKER_API: 'CAPTAIN_DOCKER_API',
        CAPTAIN_IS_DEBUG: 'CAPTAIN_IS_DEBUG',
        DEFAULT_PASSWORD: 'DEFAULT_PASSWORD',
        IS_CAPTAIN_INSTANCE: 'IS_CAPTAIN_INSTANCE',
        DEMO_MODE_ADMIN_IP: 'DEMO_MODE_ADMIN_IP',
    },

    BY_PASS_PROXY_CHECK: process.env.BY_PASS_PROXY_CHECK,

    CAPTAIN_DOCKER_API: process.env.CAPTAIN_DOCKER_API,

    CAPTAIN_IS_DEBUG: !!process.env.CAPTAIN_IS_DEBUG,

    MAIN_NODE_IP_ADDRESS: process.env.MAIN_NODE_IP_ADDRESS,

    ACCEPTED_TERMS: !!process.env.ACCEPTED_TERMS,

    IS_CAPTAIN_INSTANCE: process.env.IS_CAPTAIN_INSTANCE,

    DEMO_MODE_ADMIN_IP: process.env.DEMO_MODE_ADMIN_IP,

    DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD,

    CAPROVER_DISABLE_ANALYTICS:
        !!process.env.CAPROVER_DISABLE_ANALYTICS || !!process.env.DO_NOT_TRACK,

    PRO_FEATURES_ENABLED: !!process.env.PRO_FEATURES_ENABLED,
}
