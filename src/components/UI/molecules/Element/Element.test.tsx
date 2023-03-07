import { render } from '@testing-library/react';
import React from 'react';
import Element, { ElementProps } from './Element';

describe('Element', () => {
    const defaultProps: ElementProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Element {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Element')).toBeTruthy();
    });
});
