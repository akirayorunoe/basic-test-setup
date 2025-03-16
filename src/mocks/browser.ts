import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Dành cho client-side - trình duyệt
// Khi bạn chạy ứng dụng trên trình duyệt (dev mode) với Vite hoặc React.
// Giả lập request trên client-side mà không cần một backend thực.
export const worker = setupWorker(...handlers)

