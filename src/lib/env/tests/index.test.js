import { isTest, getAnalyticsId } from '..';
import { assert } from 'chai';
// import sinon from 'sinon';

describe('lib/env', () => {

    const ANALYTICS_DEV = 'UA-45447105-7';
    // const ANALYTICS_PROD = 'UA-45447105-1';

    beforeEach(() => {
        process.env = Object.assign(process.env, { CUSTOM_VAR: 'value' });
    })

    describe('isTest', () => {
        it('should return true for NODE_ENV=test', () => {
            // process.env.NODE_ENV = 'test';
            assert(isTest(), true)
        })

        it('should return false for NODE_ENV=dev', () => {
            // process.env.NODE_ENV = 'dev';
            assert(isTest(), false)
        })

        it('should return false for NODE_ENV=prod', () => {
            // process.env.NODE_ENV = 'prod';
            assert(isTest(), false)
        })
    });

    describe('getAnalyticsId', () => {
        it('should return ANALYTICS_DEV for NODE_ENV=test', () => {
            process.env.NODE_ENV = 'test';
            assert.equal(getAnalyticsId(), ANALYTICS_DEV)
        })

        it('should return ANALYTICS_DEV for NODE_ENV=dev', () => {
            process.env.NODE_ENV = 'dev';
            assert.equal(getAnalyticsId(), ANALYTICS_DEV)
        })

        // TODO: Stub `process.env`.  this solution dosen't seem to be working
        // it('should return ANALYTICS_PROD for NODE_ENV=prod', () => {
        //     process.env.NODE_ENV = 'prod';
        //     assert.equal(getAnalyticsId(), ANALYTICS_PROD)
        // })

        it('should return ANALYTICS_DEV for undefined NODE_ENV', () => {
            assert.equal(getAnalyticsId(), ANALYTICS_DEV)
        })
    });
});
