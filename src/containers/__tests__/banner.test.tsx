import { shallow } from 'enzyme';
import { BannerContainer } from 'containers';

let wrapped = shallow(<BannerContainer></BannerContainer>);
console.log('wrapped ==>', wrapped);

test('it works', () => {});
