import { UppercaseDrinksPipe } from './uppercase-drinks.pipe';

describe('UppercaseDrinksPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseDrinksPipe();
    expect(pipe).toBeTruthy();
  });
});
