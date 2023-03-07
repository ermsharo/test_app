import { render } from '@testing-library/react';
import React from 'react';
import HeaderSearch, { HeaderSearchProps } from './HeaderSearch';

describe('HeaderSearch', () => {
    const defaultProps: HeaderSearchProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<HeaderSearch {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HeaderSearch')).toBeTruthy();
    });
});
