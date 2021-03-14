import { shallow } from 'enzyme';
import { BannerContainer } from 'containers';
import { Banner } from 'components';
import SubscribeContainer from 'containers/subscribe';

describe('Banner Container', () => {
	let wrapper = shallow(<BannerContainer />);

	it('renders all children', () => {
		let title = wrapper.find(Banner.Title);
		expect(title).toHaveLength(1);
		// expect(title.isEmpty()).toEqual('try');

		let subTitle = wrapper.find(Banner.SubTitle);
		expect(subTitle).toHaveLength(1);
	});

	let subscribe = wrapper.find(SubscribeContainer);
	expect(subscribe).toHaveLength(1);
});

// <Banner.Title>Unlimited movies, TV shows, and more.</Banner.Title>
// <Banner.SubTitle>Watch anywhere. Cancel anytime.</Banner.SubTitle>
// <SubscribeContainer />
