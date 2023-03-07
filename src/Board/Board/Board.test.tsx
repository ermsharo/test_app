import { render } from '@testing-library/react';
import React from 'react';
import Board, { BoardProps } from './Board';

describe('Board', () => {
    const defaultProps: BoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Board {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Board')).toBeTruthy();
    });
});
