// eslint-disable-next-line
const { NODE_ENV } = process.env;

const TEST_ENV = 'test'
const PROD_ENV = 'prod'

const ANALYTICS_DEV = 'UA-45447105-7'
const ANALYTICS_PROD = 'UA-45447105-1'

export const isTest = () => NODE_ENV === TEST_ENV

export const getAnalyticsId = () => (NODE_ENV === PROD_ENV
  ? ANALYTICS_PROD : ANALYTICS_DEV)
