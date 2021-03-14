import { shallow } from 'enzyme';
import { Banner } from 'components';

const textString: string = 'test';

describe('Banner.Title', () => {
	let wrapped = shallow(<Banner.Title>{textString}</Banner.Title>);

	it('should render child text', () => {
		expect(wrapped.text()).toEqual(textString);
	});
});

describe('Banner.SubTitle', () => {
	let wrapped = shallow(<Banner.SubTitle>{textString}</Banner.SubTitle>);
	it('should render child text', () => {
		expect(wrapped.text()).toEqual(textString);
	});
});
