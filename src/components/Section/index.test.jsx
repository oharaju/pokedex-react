import renderer from 'react-test-renderer';
import Section from './index';

it('section structure', () => {
  const structure = renderer.create(<Section/>).toJSON();
  expect(structure).toMatchSnapshot();
});