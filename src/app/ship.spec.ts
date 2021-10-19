import { Ship } from './ship';

describe('Ship', () => {
  it('should create an instance', () => {
    expect(new Ship("Isuzu", "Isuzu.png")).toBeTruthy();
  });
});
