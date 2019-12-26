import { sayHi } from './index';

it('salutes people', () => {
  const hi = sayHi('Ali');
  expect(hi).toBe('Hi, Ali');
});
