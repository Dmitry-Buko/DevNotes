export const topics = [
  {
    id: "components",
    path: "/components",
    title: "Components",
    emoji: "🧩",
    content: [
      { type: "p", text: "Компоненты — это основные строительные блоки React-приложения. Они позволяют разбивать интерфейс на независимые, переиспользуемые и легко тестируемые части, как LEGO." },
      { type: "h", text: "Что такое компонент?" },
      { type: "p", text: "Компонент — это функция или класс, который принимает данные (props) и возвращает React-элемент (JSX)." },
      { type: "c", code: "function Welcome(props) {\n  return <h1>Привет, {props.name}!</h1>;\n}" },
      { type: "h", text: "Функциональные компоненты (современный стандарт с React 16.8+)" },
      { type: "c", code: "const Button = ({ text, onClick, variant = 'primary' }) => {\n  return (\n    <button className={`btn btn-${variant}`} onClick={onClick}>\n      {text}\n    </button>\n  );\n};" },
      { type: "h", text: "Композиция компонентов вместо наследования" },
      { type: "c", code: "<Layout>\n  <Header title=\"Мой сайт\" />\n  <Main>\n    <Sidebar />\n    <Content />\n  </Main>\n  <Footer />\n</Layout>" },
      { type: "w", text: "Название компонента обязательно должно начинаться с заглавной буквы, иначе React воспримет его как обычный HTML-тег." },
      { type: "l", items: [
        "Один компонент — одна задача (Single Responsibility Principle)",
        "Чем меньше компонент — тем проще его переиспользовать и тестировать",
        "Логику выносим в кастомные хуки, UI оставляем в компоненте"
      ]}
    ]
  },

  {
    id: "props",
    path: "/props",
    title: "Props",
    emoji: "📬",
    content: [
      { type: "p", text: "Props (properties) — это объект, через который родительский компонент передаёт данные и функции дочернему. Props доступны только для чтения (immutable)." },
      { type: "h", text: "Как работают props" },
      { type: "c", code: "function UserCard({ name, age, isAdmin, children }) {\n  return (\n    <div className=\"card\">\n      <h3>{name}</h3>\n      <p>Возраст: {age}</p>\n      {isAdmin && <span className=\"badge\">ADMIN</span>}\n      {children}\n    </div>\n  );\n}\n\n<UserCard name=\"Анна\" age={25} isAdmin={true}>\n  <button>Редактировать</button>\n</UserCard>" },
      { type: "h", text: "Значения по умолчанию и rest-параметры" },
      { type: "c", code: "function Button({ text = 'Отправить', size = 'md', ...restProps }) {\n  return <button {...restProps} className={`btn-${size}`}>{text}</button>;\n}" },
      { type: "w", text: "Никогда не мутируй props! Если нужно изменить данные — поднимай состояние в родителя (Lifting State Up)." },
      { type: "l", items: [
        "Props drilling — передача props через много уровней (решается Context или Composition)",
        "Объекты, массивы и функции в props создаются заново при каждом рендере родителя",
        "Для типизации используй TypeScript или PropTypes"
      ]}
    ]
  },

  {
    id: "state",
    path: "/state",
    title: "State",
    emoji: "⚡",
    content: [
      { type: "p", text: "State — это внутренние данные компонента, которые могут меняться со временем. Каждое изменение state вызывает повторный рендер компонента." },
      { type: "h", text: "useState — базовый хук" },
      { type: "c", code: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(prev => prev + 1)}>\n      Нажато: {count} раз\n    </button>\n  );\n}" },
      { type: "h", text: "Обновление сложных данных (массивы и объекты)" },
      { type: "c", code: "setUsers(prev => [...prev, newUser]);\nsetFormData(prev => ({ ...prev, email: value }));\nsetTodos(prev => prev.filter(t => t.id !== deletedId));" },
      { type: "w", text: "setState асинхронный! Поэтому после вызова setCount(count + 1) значение count всё ещё старое." },
      { type: "l", items: [
        "Используй функциональную форму обновления при зависимости от предыдущего состояния",
        "Не храни в state вычисляемые данные (derived state)",
        "Для очень сложной логики состояния используй useReducer"
      ]}
    ]
  },

  {
    id: "lifecycle",
    path: "/lifecycle",
    title: "LifeCycle",
    emoji: "🔄",
    content: [
      { type: "p", text: "Жизненный цикл компонента — это этапы: монтирование, обновление, размонтирование. В функциональных компонентах всё управляется через useEffect." },
      { type: "h", text: "useEffect — главный хук жизненного цикла" },
      { type: "c", code: "import { useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  useEffect(() => {\n    const controller = new AbortController();\n    fetch(`/api/user/${userId}`, { signal: controller.signal })\n      .then(res => res.json())\n      .then(setUser);\n\n    return () => controller.abort(); // cleanup\n  }, [userId]);\n}" },
      { type: "w", text: "Массив зависимостей — самый важный момент! Забыл добавить переменную — получишь баг или бесконечный цикл." },
      { type: "l", items: [
        "[] — componentDidMount (один раз при монтировании)",
        "[userId] — componentDidUpdate при изменении userId",
        "Без массива — каждый рендер (обычно не нужно)"
      ]}
    ]
  },

  {
    id: "project-structure",
    path: "/project-structure",
    title: "Структура проекта. Modules VS FSD",
    emoji: "📁",
    content: [
      { type: "p", text: "Modules — классическая структура по типу файлов. Feature-Sliced Design (FSD) — современная архитектура, где код группируется по бизнес-фичами." },
      { type: "h", text: "Пример структуры FSD" },
      { type: "c", code: "src/\n├── app/          # providers, routes, store\n├── processes/    # сложные сценарии (onboarding)\n├── pages/        # страницы приложения\n├── widgets/      # крупные самостоятельные блоки\n├── features/     # бизнес-фичи (auth, cart, payment)\n├── entities/     # бизнес-сущности (User, Product)\n└── shared/       # UI-kit, API, utils, constants" },
      { type: "w", text: "FSD сильно упрощает масштабирование и работу в команде. Modules подходит только для маленьких проектов." }
    ]
  },

  {
    id: "virtual-dom",
    path: "/virtual-dom",
    title: "Virtual DOM. Reconciliation. Fiber",
    emoji: "🌳",
    content: [
      { type: "p", text: "Virtual DOM — это JavaScript-объект, который React хранит в памяти. Это лёгкая копия реального DOM." },
      { type: "p", text: "Reconciliation — алгоритм сравнения старого и нового Virtual DOM для нахождения минимальных изменений." },
      { type: "p", text: "Fiber — новая внутренняя архитектура React (с 16 версии), которая разбивает работу на мелкие «фибры» и позволяет прерывать/приоритизировать рендер (Concurrent Rendering)." },
      { type: "w", text: "Virtual DOM не делает приложение автоматически быстрым. Главное — не создавать лишние компоненты и правильно использовать keys." }
    ]
  },

  {
    id: "events",
    path: "/events",
    title: "Основные Events",
    emoji: "🖱️",
    content: [
      { type: "p", text: "React использует SyntheticEvent — свою кросс-браузерную обёртку над нативными событиями браузера." },
      { type: "c", code: "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault();     // обязательно!\n    e.stopPropagation();\n    console.log('Форма отправлена');\n  };\n\n  return <form onSubmit={handleSubmit}>...</form>;\n}" },
      { type: "w", text: "SyntheticEvent обнуляется после обработчика. Если нужно сохранить — сохраняй нужные свойства или используй e.persist() (устарело)." }
    ]
  },

  {
    id: "additions",
    path: "/additions",
    title: "Дополнения (key, Fragments, refs, StrictMode)",
    emoji: "🛠️",
    content: [
      { type: "h", text: "key — обязательный атрибут в списках" },
      { type: "c", code: "todos.map(todo => <TodoItem key={todo.id} todo={todo} />)" },
      { type: "h", text: "Fragments <> </> — не создаёт лишний DOM-узел" },
      { type: "c", code: "<>\n  <h1>Заголовок</h1>\n  <p>Текст</p>\n</>" },
      { type: "h", text: "useRef — ссылка на DOM-элемент или значение" },
      { type: "c", code: "const inputRef = useRef(null);\n\nuseEffect(() => {\n  inputRef.current.focus();\n}, []);\n\n<input ref={inputRef} />" },
      { type: "w", text: "StrictMode в development режиме дважды вызывает useEffect и некоторые хуки — это специально, чтобы находить баги." }
    ]
  },

  {
    id: "optimization",
    path: "/optimization",
    title: "Оптимизация (memo, useMemo, useCallback, lazy, Suspense, Profiler)",
    emoji: "⚡",
    content: [
      { type: "h", text: "React.memo, useMemo, useCallback" },
      { type: "c", code: "const MemoComponent = React.memo(MyComponent);\n\nconst expensiveValue = useMemo(() => calculate(data), [data]);\n\nconst handleClick = useCallback(() => save(id), [id]);" },
      { type: "h", text: "Code Splitting + Suspense" },
      { type: "c", code: "const HeavyComponent = lazy(() => import('./HeavyComponent'));\n\n<Suspense fallback={<Spinner />}>\n  <HeavyComponent />\n</Suspense>" },
      { type: "w", text: "Не оборачивай всё подряд в memo/useMemo — overhead может быть больше пользы. Оптимизируй только узкие места." },
      { type: "p", text: "Profiler — инструмент для измерения производительности компонентов в React DevTools." }
    ]
  },

  {
    id: "context",
    path: "/context",
    title: "Context",
    emoji: "🌐",
    content: [
      { type: "p", text: "Context API позволяет передавать данные глубоко по дереву компонентов без пропсов (prop drilling)." },
      { type: "c", code: "const ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}" },
      { type: "w", text: "Любое изменение value вызывает ре-рендер всех компонентов, использующих useContext. Для частых обновлений лучше использовать внешний state + useMemo." }
    ]
  },

  {
    id: "hoc",
    path: "/hoc",
    title: "HOC (Higher-Order Components)",
    emoji: "🎩",
    content: [
      { type: "p", text: "Higher-Order Component — это функция, которая принимает компонент и возвращает новый, обогащённый компонент." },
      { type: "c", code: "function withLogger(WrappedComponent) {\n  return function WithLogger(props) {\n    useEffect(() => {\n      console.log('Компонент', WrappedComponent.name, 'смонтирован');\n    }, []);\n    return <WrappedComponent {...props} />;\n  };\n}\n\nconst EnhancedButton = withLogger(Button);" },
      { type: "w", text: "Сегодня HOC почти всегда можно и нужно заменять на кастомные хуки — они проще в использовании и отладке." }
    ]
  },

  {
    id: "routing",
    path: "/routing",
    title: "Routing (React Router)",
    emoji: "🛤️",
    content: [
      { type: "c", code: "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n<BrowserRouter>\n  <Routes>\n    <Route path='/' element={<Home />} />\n    <Route path='/users/:id' element={<UserProfile />} />\n  </Routes>\n</BrowserRouter>" },
      { type: "l", items: [
        "useParams() — достать динамические параметры URL",
        "useNavigate() — перейти программно",
        "Outlet — рендер вложенных роутов",
        "Data Router (loader/action) — современный способ загружать данные"
      ]}
    ]
  },

  {
    id: "storages",
    path: "/storages",
    title: "Storages (localStorage, sessionStorage)",
    emoji: "💾",
    content: [
      { type: "c", code: "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\n\n// JSON\nlocalStorage.setItem('cart', JSON.stringify(cart));\nconst cart = JSON.parse(localStorage.getItem('cart')) || [];" },
      { type: "w", text: "localStorage и sessionStorage работают только на клиенте. При SSR (Next.js) обязательно проверяй if (typeof window !== 'undefined')." }
    ]
  },

  {
    id: "hooks",
    path: "/hooks",
    title: "Хуки: useId, useReducer, useTransition, useOptimistic",
    emoji: "💾",
    content: [
      { type: "h", text: "useId — уникальные ID для доступности" },
      { type: "c", code: "const id = useId();\n<label htmlFor={id}>Имя:</label>\n<input id={id} />" },
      { type: "h", text: "useReducer — для сложной логики состояния" },
      { type: "h", text: "useTransition — пометить обновление как «не срочное» (плавный UI)" },
      { type: "h", text: "useOptimistic (React 19) — оптимистичные обновления UI до ответа сервера" },
      { type: "w", text: "Эти хуки особенно полезны в сложных формах, фильтрах и при работе с серверными данными." }
    ]
  }
];