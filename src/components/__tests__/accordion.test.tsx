import { shallow } from 'enzyme';
import { Accordion } from 'components';

xdescribe('Accordion Component', () => {
	let wrapped = shallow(
		<Accordion.Body random="it" id={9}>
			child
		</Accordion.Body>
	);
	it('a', () => {
		// expect(wrapped.text()).toEqual('abc');
	});
	it('b', () => {
		expect(wrapped.props().random).toEqual('test');
	});
});
