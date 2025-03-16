import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'
import { createServer } from './test/server';
import { HttpResponse } from 'msw';


test('it displays the button', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
});

describe('check api', () => {
    // Tạo server mock API
    createServer(
        [
            {
                method: 'get',
                path: 'https://jsonplaceholder.typicode.com/todos',
                res: () => HttpResponse.json([{
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                }]),
            },
        ]
    );

    test('it displays the correct data from api', async () => {
        render(<App />);

        const button = screen.getByRole('button', { name: /click me/i });
        await userEvent.click(button); // 🔥 Cần `await` do `userEvent` là async

        const li = await screen.findAllByRole('listitem');
        screen.debug()
        expect(li).toHaveLength(1);
    });
})
