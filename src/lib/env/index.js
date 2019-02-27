const { NODE_ENV } = process.env;

const TEST_ENV = 'test';
const PROD_ENV = 'prod';

const ANALYTICS_DEV = 'UA-45447105-7';
const ANALYTICS_PROD = 'UA-45447105-1';

export const isTest = () => NODE_ENV === TEST_ENV;

export const getAnalyticsId = () => {
    switch(NODE_ENV) {
        case PROD_ENV:
            return ANALYTICS_PROD;
        case TEST_ENV:
            return ANALYTICS_DEV;
        default:
            return ANALYTICS_DEV;
    }
}