import OnboardingScreen from "./OnboardingScreen";
import { render } from '@testing-library/react-native';

describe('List Screen Test', () => {
    it('Should match with snapshot', () => {
        const { toJSON } = render(<OnboardingScreen />);
        expect(toJSON()).toMatchSnapshot();
    })
})