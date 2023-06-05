import _ from 'lodash';

export function separate() {
  console.log(
    _.range(10)
      .map(() => '-')
      .join(''),
  );
}
