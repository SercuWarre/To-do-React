import { useEffect, useState } from 'react'
import { AppFooter } from '../Components/AppFooter'
import { AppHeader } from '../Components/AppHeader'
import { Todo } from '../Models/Todo'
import { Plus } from 'lucide-react'
import { uid } from 'uid'

export const TodoOverview = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState<Todo>({
    task: '',
    category: 'choose',
    isCompleted: false,
  })

  const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    if (newTodo.task === '' || newTodo.category === 'choose') return

    event.preventDefault()
    setNewTodo(() => {
      const currentNewTodo = { ...newTodo, id: uid() }
      setTodos([...todos, currentNewTodo])
      return currentNewTodo
    }) //Unieke id
    //Huidige met nieuwe todos
    setTodos([...todos, newTodo]) //combineer huidege todos met nieuwe todos
    console.log(event)
  }
  useEffect(() => {
    console.log({ newTodo })
  }, [newTodo])

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-2xl p-6">
      <AppHeader todoCount={todos.length} />
      <div className="flex-1">
        <form
          className="mb-8 flex w-full items-center gap-4"
          onSubmit={addNewTodo}
        >
          <button>
            <Plus className=" text-orange-400" />
            <span className="sr-only">Add Todo</span>
          </button>
          <input
            className="w-full appearance-none rounded bg-transparent p-2 text-1xl font-bold focus:outline-none focus-visible:ring"
            type="text"
            name="new-todo"
            id="new-todo"
            placeholder="Enter new task here."
            value={newTodo.task}
            onInput={(event: React.FormEvent<HTMLInputElement>) => {
              setNewTodo({ ...newTodo, task: event.currentTarget.value })
            }}
          />
          <select
            className="w-full appearance-none rounded bg-transparent p-2 focus:outline-none focus-visible:ring"
            name="category"
            id="category"
            value={newTodo.category}
            onInput={(event: React.FormEvent<HTMLSelectElement>) => {
              setNewTodo({ ...newTodo, category: event.currentTarget.value })
            }}
          >
            <option disabled value="choose">
              choose
            </option>
            <option value="hobby">Hobby</option>
            <option value="work">Work</option>
          </select>
        </form>
        {/* {todos.map((todo: Todo) => (
                        <div>
                            <input type="checkbox" id="todo-1" />
                            <label htmlFor="todo-1">{todo.task}</label>
                        </div>
                    ))} */}

        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              <label
                htmlFor={todo.id}
                className="flex items-center gap-4 transition-opacity duration-200 mb-2"
              >
                <input className="peer sr-only" type="checkbox" id={todo.id} />
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-orange-600 peer-checked:bg-orange-600 peer-focus-visible:ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-current text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div key={todo.id}>
                  <p className="text-1xl font-semibold">{todo.task}</p>
                  <p className="text-neutral-400">{todo.category}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <AppFooter />
    </div>
  )
}
