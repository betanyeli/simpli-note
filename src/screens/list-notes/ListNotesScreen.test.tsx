import ListNotesScreen from "./ListNotesScreen";
import { render } from '@testing-library/react-native';

describe('List Screen Test', () => {
    it('Should match with snapshot', () => {
        const { toJSON } = render(<ListNotesScreen />);
        expect(toJSON()).toMatchSnapshot();
    })
})