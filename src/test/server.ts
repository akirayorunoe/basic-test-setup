import { setupServer, SetupServerApi } from 'msw/node';
import { DefaultBodyType, http, HttpHandler, HttpResponseResolver, Path, PathParams } from 'msw';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'all';

export type HandleConfig = {
    res: HttpResponseResolver<PathParams, DefaultBodyType, DefaultBodyType>;
    path: Path;
    method?: HttpMethod;
};

export function createServer(handleConfig: HandleConfig[]): { server: SetupServerApi, handlers: HttpHandler[] } {
    const handlers = handleConfig.map(({ method = 'get', path, res }) => {
        return http[method](path, (info) => res(info));
    });

    // Dành cho server-side - Jest, SSR
    // Khi chạy test với Jest (unit test, integration test).
    // Khi dùng SSR (Server-Side Rendering) như Next.js, Remix.
    // Khi chạy ứng dụng trong môi trường Node.js (không có Service Worker).
    const server = setupServer(...handlers);

    beforeAll(() => {
        server.listen({ onUnhandledRequest: 'error' })
    })
    afterEach(() => {
        server.resetHandlers()
    })
    afterAll(() => {
        server.close()
    })
    return { server, handlers }
}