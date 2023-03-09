import renderer from 'react-test-renderer';
import Form from './index';

it('Form structure', () => {
  const structure = renderer.create(<Form/>).toJSON();
  expect(structure).toMatchSnapshot();
});