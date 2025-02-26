import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/api/user', () => {
        return HttpResponse.json({
            firstName: 'Neil',
            lastName: 'Maverick',
            age: 30
        })
    }),
];