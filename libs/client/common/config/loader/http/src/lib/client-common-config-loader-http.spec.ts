import { clientCommonConfigLoaderHttp } from './client-common-config-loader-http';

describe('clientCommonConfigLoaderHttp', () => {
  it('should work', () => {
    expect(clientCommonConfigLoaderHttp()).toEqual(
      'client-common-config-loader-http'
    );
  });
});
