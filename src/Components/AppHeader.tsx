// Hello, warre!


// There are {count} todo(s) left to do.
export const AppHeader = (props: { todoCount: number }) => (





  <header className="mb-6 py-12">
    <h1 className="text-4xl font-bold tracking-wide dark:text-red">
      Hello Warre
    </h1>
    <p className="text-lg text-neutral-500">
      There are <span className="font-bold">{props.todoCount} todo(s)</span> left to
      do.
    </p>
  </header>
)
