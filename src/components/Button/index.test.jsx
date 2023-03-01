import renderer from 'react-test-renderer';
import Button from './index';

it('button structure', () => {
  const tree = renderer.create(<Button/>).toJSON();
  expect(tree).toMatchSnapshot();
});

