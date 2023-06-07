/* eslint-disable */
export default {
  displayName: 'client-common-config-loader-http',
  preset: '../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../../coverage/libs/client/common/config/loader/http',
};
