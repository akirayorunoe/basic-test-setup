import { useState } from 'react'
import './App.css'
import { hasPermission } from './auth-rbac'
import Timer from './components/Timer'

type Todo = {
  completed: boolean,
  id: number,
  title: string
  userId: number
}

function App() {
  const [data, setData] = useState<Todo[]>([])
  hasPermission({ id: '1', roles: ['admin'] }, 'view:comments')

  const API_URL = `https://jsonplaceholder.typicode.com`;

  const getData = async () => {
    try {
      const res = await fetch(`${API_URL}/todos`);
      const json = await res.json();
      if (Array.isArray(json)) {
        setData(json); // ✅ Chỉ gán khi response là array
      } else {
        setData([]); // ✅ Tránh lỗi `.map`
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // ✅ Xử lý lỗi mạng
    }
  };

  return (
    <>
      <button onClick={() => getData()}>Click me</button>
      <ul>{data && data?.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
      {/* Timer<Timer /> */}
    </>
  )
}

export default App
