import { RouterProvider } from 'react-router-dom'
import router from './bootstrap/router.tsx'

function App() {
  return (
    <>
      {/* <TodoOverview/> */}

      <RouterProvider router={router} />
    </>
  )
}

export default App
