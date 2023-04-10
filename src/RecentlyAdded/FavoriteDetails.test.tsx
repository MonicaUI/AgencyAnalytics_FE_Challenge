import React from 'react';
import { getByRole, fireEvent, render, screen } from '@testing-library/react';
import FavoriteDetails from './FavoriteDetails';

describe('Import Mockdetails to display details', () => {
    test("should call HandleClickImage callback", () => {

        const image = screen.getByRole('button');
        const post = [{
            createdAt
                :
                "2018-10-21T16:11:11.737Z",
            dimensions
                :
                { height: 4270, width: 6400 },
            favorited
                :
                false,
            filename
                :
                "so_iceland_keira.jpg",
            id
                :
                "fce11e73-c529-4aae-a405-4aadb9035372"
        }]
        const handleFavouite: any = jest.fn();
        const handleDelete: any = jest.fn();

        const { getByTestId } = render(
            <FavoriteDetails image={image} post={post} onDelete={handleDelete} onChange={handleFavouite} />
        );
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByTestId('id'));
        expect(image).toBeVisible();
        expect(post).toBeCalledTimes(20);
        expect(handleFavouite).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalled();

    });
})
