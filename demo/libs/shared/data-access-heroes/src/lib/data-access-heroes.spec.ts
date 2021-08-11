import { dataAccessHeroes } from './data-access-heroes';

describe('dataAccessHeroes', () => {
  it('should work', () => {
    expect(dataAccessHeroes()).toEqual('data-access-heroes');
  });
});
