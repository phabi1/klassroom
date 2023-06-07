import * as fromSpace from '../reducers/space.reducer';
import { selectSpaceState } from './space.selectors';

describe('Space Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSpaceState({
      [fromSpace.spaceFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
