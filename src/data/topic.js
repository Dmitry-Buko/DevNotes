// src/data/topics.js
export const topics = [
  {
    id: "components",
    path: "components",
    title: "Components",
    emoji: "🧱",
    content: [
      {
        type: "p",
        text: "Компоненты — это фундамент React. Они позволяют разбивать сложный UI на небольшие, независимые, переиспользуемые и легко тестируемые части, подобно LEGO.",
      },

      { type: "h", text: "Основные характеристики компонентов" },
      {
        type: "l",
        items: [
          "Независимы и переиспользуемы",
          "Поддерживают композицию (вложение одного компонента в другой)",
          "Могут принимать props и иметь собственное состояние (state)",
          "Всегда возвращают JSX, null или массив элементов",
          "Могут быть функциональными или (устаревшими) классовыми",
        ],
      },

      { type: "h", text: "JSX и компоненты" },
      {
        type: "p",
        text: "JSX — синтаксический сахар, который Babel преобразует в вызовы React.createElement().",
      },
      {
        type: "c",
        code: "const element = <h1 className=\"title\">Привет, React!</h1>;\n\n// Эквивалентно:\nconst element = React.createElement(\n  'h1',\n  { className: 'title' },\n  'Привет, React!'\n);",
      },

      {
        type: "h",
        text: "Stateless (Presentational) vs Stateful (Container) компоненты",
      },
      {
        type: "l",
        items: [
          "Stateless — получают данные только через props и просто рендерят UI (рекомендуется)",
          "Stateful — управляют внутренним состоянием, side-effects и логикой",
          "В современном React большинство компонентов — stateless + custom hooks для логики",
        ],
      },
      {
        type: "c",
        code: "// Stateless (Presentational)\nfunction Button({ text, onClick, variant = 'primary' }) {\n  return <button className={`btn-${variant}`} onClick={onClick}>{text}</button>;\n}\n\n// Stateful\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(prev => prev + 1)}>\n      Нажато {count} раз\n    </button>\n  );\n};",
      },

      {
        type: "w",
        text: "Название компонента обязательно должно начинаться с заглавной буквы, иначе React воспримет его как HTML-тег.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/learn/your-first-component",
      },
    ],
  },

  {
    id: "props",
    path: "props",
    title: "Props",
    emoji: "📬",
    content: [
      {
        type: "p",
        text: "Props (properties) — механизм передачи данных от родительского компонента к дочернему. Props иммутабельны (только для чтения) и доступны внутри компонента через объект props.",
      },

      { type: "h", text: "Что можно передавать через props" },
      {
        type: "l",
        items: [
          "Примитивы: string, number, boolean",
          "Сложные данные: объекты, массивы",
          "Функции (обработчики событий)",
          "JSX-элементы (через children)",
        ],
      },

      {
        type: "c",
        code: "function UserCard({ user, isOnline, children, onFollow }) {\n  return (\n    <div className=\"card\">\n      <img src={user.avatar} alt={user.name} />\n      <h3>{user.name}</h3>\n      <p>Онлайн: {isOnline ? '✅' : '❌'}</p>\n      <button onClick={onFollow}>Подписаться</button>\n      {children}\n    </div>\n  );\n}",
      },

      { type: "h", text: "Деструктуризация и значения по умолчанию" },
      {
        type: "c",
        code: "function Button({ text = 'Отправить', size = 'md', ...rest }) {\n  return <button className={`btn btn-${size}`} {...rest}>{text}</button>;\n}",
      },

      {
        type: "w",
        text: "Никогда не мутируй props! Если нужно изменить данные — поднимай состояние в родителя (Lifting State Up).",
      },
      {
        type: "l",
        items: [
          "Props drilling — передача через много уровней (решается Context или Composition)",
          "При передаче объектов/массивов/функций они пересоздаются при каждом рендере родителя (влияет на оптимизацию)",
        ],
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/learn/passing-props-to-a-component",
      },
    ],
  },

  {
    id: "state",
    path: "state",
    title: "State",
    emoji: "⚡",
    content: [
      {
        type: "p",
        text: "State — внутренние изменяемые данные компонента. Изменение state приводит к повторному рендеру компонента и его детей (если не оптимизировано).",
      },

      { type: "h", text: "Сравнение Props и State" },
      {
        type: "l",
        items: [
          "Props приходят от родителя и только читаются",
          "State создаётся и полностью управляется внутри компонента",
          "Props — immutable, State — можно изменять через setter",
        ],
      },

      {
        type: "c",
        code: "import { useState } from 'react';\n\nfunction Form() {\n  const [formData, setFormData] = useState({ email: '', password: '' });\n\n  const handleChange = (e) => {\n    setFormData(prev => ({\n      ...prev,\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  return <input name=\"email\" value={formData.email} onChange={handleChange} />;\n}",
      },

      {
        type: "w",
        text: "setState асинхронный! Поэтому после setCount(count + 1) значение count остаётся старым. Всегда используй функциональную форму при зависимости от предыдущего состояния.",
      },
      {
        type: "l",
        items: [
          "Для массивов и объектов всегда создавай новый экземпляр (...spread или map/filter)",
          "Не храни в state данные, которые можно вычислить из props/state (derived state)",
          "Для очень сложной логики состояния используй useReducer",
        ],
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/reference/react/useState",
      },
    ],
  },

  {
    id: "lifecycle",
    path: "lifecycle",
    title: "LifeCycle",
    emoji: "🔄",
    content: [
      {
        type: "p",
        text: "Жизненный цикл компонента — это этапы его существования: монтирование (Mounting), обновление (Updating) и размонтирование (Unmounting).",
      },

      { type: "h", text: "Классовые компоненты (устаревший подход)" },
      {
        type: "l",
        items: [
          "constructor() — инициализация state и привязка методов",
          "componentDidMount() — после первого рендера (fetch, подписки)",
          "componentDidUpdate(prevProps, prevState) — после обновления",
          "componentWillUnmount() — перед удалением (очистка)",
        ],
      },

      {
        type: "h",
        text: "Функциональные компоненты — useEffect (современный стандарт)",
      },
      {
        type: "c",
        code: "import { useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  useEffect(() => {\n    fetchUser(userId);\n    return () => {\n      // cleanup\n    };\n  }, [userId]);\n}",
      },

      {
        type: "h",
        text: "Подробное соответствие useEffect и классовых методов",
      },
      {
        type: "l",
        items: [
          "1. Mounting: useEffect(() => {}, []) — заменяет componentDidMount(). Выполняется только один раз после монтирования.",
          "2. Updating: useEffect(() => {}, [dependency]) — заменяет componentDidUpdate(). Выполняется при изменении зависимостей.",
          "3. Unmounting: useEffect(() => () => {}) — заменяет componentWillUnmount(). Возвращаемая функция выполняет очистку.",
        ],
      },

      {
        type: "p",
        text: "useEffect без второго аргумента выполняется после каждого рендера (аналог componentDidMount + componentDidUpdate).",
      },
      {
        type: "w",
        text: "При первом рендере useEffect всегда выполняется, даже если зависимости не изменились. Это нормальное поведение.",
      },
      {
        type: "w",
        text: "Неправильный массив зависимостей — одна из самых частых причин багов и бесконечных циклов в React.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/reference/react/useEffect",
      },
    ],
  },

  {
    id: "project-structure",
    path: "project-structure",
    title: "Структура проекта. Modules VS FSD",
    emoji: "📁",
    content: [
      {
        type: "p",
        text: "Правильная структура файлов сильно влияет на скорость разработки, поддержку и масштабирование проекта.",
      },
      { type: "h", text: "Сравнение двух подходов" },
      {
        type: "l",
        items: [
          "Modules (классика) — группировка по типу: components/, pages/, utils/, hooks/",
          "Feature-Sliced Design (FSD) — группировка по бизнес-логике и слоям: features/, entities/, widgets/, shared/",
        ],
      },
      {
        type: "c",
        code: "// Пример FSD\nsrc/\n  ├── app/           // инициализация приложения\n  ├── features/      // бизнес-фичи (auth, cart)\n  ├── entities/      // бизнес-сущности (User, Product)\n  ├── widgets/       // крупные UI-блоки\n  ├── shared/        // переиспользуемое (ui, api, utils)",
      },
      {
        type: "w",
        text: "FSD рекомендуется для средних и крупных проектов и команд. Modules достаточно для небольших приложений.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация FSD",
        link: "https://feature-sliced.design/",
      },
    ],
  },

  {
    id: "virtual-dom",
    path: "virtual-dom",
    title: "Virtual DOM. Reconciliation. Fiber",
    emoji: "🌳",
    content: [
      {
        type: "p",
        text: "Virtual DOM — это лёгкое JavaScript-представление реального DOM в памяти React.",
      },
      {
        type: "p",
        text: "Reconciliation — алгоритм сравнения (diffing) старого и нового Virtual DOM для определения минимальных изменений в реальном DOM.",
      },
      {
        type: "p",
        text: "Fiber — новая архитектура reconciler (с React 16), которая представляет работу рендера как связный список и позволяет прерывать/приоритизировать обновления (Concurrent Rendering).",
      },
      {
        type: "w",
        text: "Virtual DOM не делает приложение автоматически быстрым. Важны правильные keys, мемоизация и разумная структура компонентов.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/learn/render-and-commit",
      },
    ],
  },

  {
    id: "events",
    path: "events",
    title: "Основные Events",
    emoji: "🖱️",
    content: [
      {
        type: "p",
        text: "React использует SyntheticEvent — свою кросс-браузерную обёртку над нативными событиями браузера.",
      },
      {
        type: "c",
        code: "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault(); // обязательно для форм!\n    e.stopPropagation();\n    console.log('Форма отправлена');\n  };\n  return <form onSubmit={handleSubmit}>...</form>;\n}",
      },
      {
        type: "l",
        items: [
          "Все события в camelCase: onClick, onChange, onSubmit, onKeyDown",
          "SyntheticEvent пулится (обнуляется после обработчика) — сохраняй нужные данные, если используешь асинхронно",
          "Для глобальных событий (document, window) используй useEffect",
        ],
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/learn/responding-to-events",
      },
    ],
  },

  {
    id: "additions",
    path: "additions",
    title: "Дополнения (key, Fragments, refs, StrictMode)",
    emoji: "🛠️",
    content: [
      { type: "h", text: "key — обязательный атрибут в списках" },
      {
        type: "c",
        code: "items.map(item => <Item key={item.id} item={item} />)",
      },
      {
        type: "h",
        text: "React.Fragment / <> </> — не создаёт лишний DOM-узел",
      },
      { type: "c", code: "<>\n  <Header />\n  <Main />\n  <Footer />\n</>" },
      {
        type: "h",
        text: "useRef — ссылка на DOM-элемент или сохранённое значение",
      },
      {
        type: "c",
        code: "const inputRef = useRef(null);\nuseEffect(() => inputRef.current.focus(), []);\n<input ref={inputRef} />",
      },
      {
        type: "w",
        text: "StrictMode в development специально вызывает эффекты дважды, чтобы выявить проблемы с side-effects.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/reference/react/StrictMode",
      },
    ],
  },

  {
    id: "optimization",
    path: "optimization",
    title: "Оптимизация (memo, useMemo, useCallback, lazy, Suspense)",
    emoji: "🚀",
    content: [
      { type: "h", text: "React.memo — мемоизация компонента" },
      {
        type: "p",
        text: "React.memo — HOC, который предотвращает повторный рендер, если props не изменились.",
      },
      {
        type: "c",
        code: "const UserCard = React.memo(({ user }) => {\n  console.log('Ререндер UserCard');\n  return <p>{user.name}</p>;\n});\n\nconst areEqual = (prev, next) => prev.user.id === next.user.id;\nconst MemoizedCard = React.memo(UserCard, areEqual);",
      },

      { type: "h", text: "useMemo и useCallback" },
      {
        type: "c",
        code: "const expensiveValue = useMemo(() => calculate(data), [data]);\nconst handleClick = useCallback((id) => save(id), [id]);",
      },

      { type: "h", text: "Code Splitting + Suspense" },
      {
        type: "c",
        code: "const Heavy = lazy(() => import('./HeavyComponent'));\n<Suspense fallback={<Spinner />}>\n  <Heavy />\n</Suspense>",
      },

      {
        type: "w",
        text: "Избыточная мемоизация добавляет overhead. Используй только там, где действительно есть проблема производительности.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/learn/performance",
      },
    ],
  },

  {
    id: "context",
    path: "context",
    title: "Context",
    emoji: "🌐",
    content: [
      {
        type: "p",
        text: "Context API позволяет передавать данные глубоко по дереву компонентов без prop drilling.",
      },
      {
        type: "c",
        code: "const ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}",
      },
      {
        type: "w",
        text: "Изменение value в Provider вызывает ре-рендер всех потребителей контекста. Для частых обновлений мемоизируй значение.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/learn/passing-data-deeply-with-context",
      },
    ],
  },

  {
    id: "hoc",
    path: "hoc",
    title: "HOC (Higher-Order Components)",
    emoji: "🎩",
    content: [
      {
        type: "p",
        text: "HOC — функция высшего порядка, которая принимает компонент и возвращает новый компонент с дополнительной функциональностью.",
      },
      {
        type: "c",
        code: "function withLogger(WrappedComponent) {\n  return function WithLogger(props) {\n    useEffect(() => console.log('Mounted:', WrappedComponent.name), []);\n    return <WrappedComponent {...props} />;\n  };\n}\n\nconst EnhancedButton = withLogger(Button);",
      },
      {
        type: "w",
        text: "В современном React кастомные хуки обычно предпочтительнее HOC из-за простоты и лучшей читаемости.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://legacy.reactjs.org/docs/higher-order-components.html",
      },
    ],
  },

  {
    id: "routing",
    path: "routing",
    title: "Routing (React Router)",
    emoji: "🛤️",
    content: [
      {
        type: "p",
        text: "React Router — де-факто стандарт для маршрутизации в React-приложениях (SPA).",
      },
      {
        type: "c",
        code: '<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/users/:id" element={<UserProfile />} />\n  </Routes>\n</BrowserRouter>',
      },
      {
        type: "l",
        items: [
          "useParams() — динамические параметры URL",
          "useNavigate() — программная навигация",
          "Outlet — рендер вложенных маршрутов",
          "Data Router (loader/action) — современный способ работы с данными",
        ],
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://reactrouter.com/",
      },
    ],
  },

  {
    id: "storages",
    path: "storages",
    title: "Storages (localStorage, sessionStorage)",
    emoji: "💾",
    content: [
      {
        type: "p",
        text: "localStorage сохраняет данные даже после закрытия браузера. sessionStorage очищается при закрытии вкладки.",
      },
      {
        type: "c",
        code: "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\n\n// Работа с JSON\nlocalStorage.setItem('user', JSON.stringify(user));\nconst savedUser = JSON.parse(localStorage.getItem('user')) || {};",
      },
      {
        type: "w",
        text: "Эти API доступны только на клиенте. В SSR-приложениях (Next.js) обязательно проверяй typeof window !== 'undefined'.",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage",
      },
    ],
  },

  {
    id: "hooks",
    path: "hooks",
    title: "Хуки",
    emoji: "🧩",
    content: [
      {
        type: "p",
        text: "Хуки позволяют использовать состояние, жизненный цикл и другие React-функции в функциональных компонентах.",
      },
      { type: "h", text: "Важные хуки из списка" },
      {
        type: "l",
        items: [
          "useId — генерация стабильных уникальных ID для доступности (a11y)",
          "useReducer — управление сложным состоянием (альтернатива useState)",
          'useTransition — пометка обновлений как "не срочных" для плавного UX',
          "useOptimistic (React 19) — оптимистичные обновления интерфейса до ответа сервера",
        ],
      },
      {
        type: "w",
        text: "Хуки можно вызывать только на верхнем уровне компонента (нельзя в условиях, циклах или вложенных функциях).",
      },
      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://react.dev/reference/react",
      },
    ],
  },

  {
    id: "bundlers",
    path: "bundlers",
    title: "Сборщики. Vite VS Webpack",
    emoji: "⚡",
    content: [
      {
        type: "p",
        text: "Сборщик (Bundler) — это инструмент, который объединяет JavaScript, CSS, изображения и другие ресурсы в оптимизированные файлы, готовые для продакшена.",
      },

      { type: "h", text: "Популярные сборщики в React-экосистеме" },
      {
        type: "l",
        items: [
          "Webpack — классический, мощный, но сложный",
          "Vite — современный, очень быстрый (рекомендуется в 2025+)",
          "Parcel, esbuild, Rollup — тоже используются",
        ],
      },

      { type: "h", text: "Vite VS Webpack — сравнение" },
      {
        type: "c",
        code: "// Vite (vite.config.js)\nimport { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\nexport default defineConfig({\n  plugins: [react()]\n})\n\n// Webpack (webpack.config.js) — намного больше кода",
      },

      {
        type: "l",
        items: [
          "Vite использует esbuild (Go) на этапе разработки → молниеносный cold start и HMR",
          "Webpack использует webpack-dev-server + babel → медленнее на старте",
          "Vite имеет встроенную поддержку React, TypeScript, CSS Modules, PostCSS",
          "Webpack более гибкий и зрелый, но требует сложной конфигурации",
          "Vite значительно быстрее в разработке (в 10–100 раз по скорости HMR)",
          "Webpack лучше оптимизирован для очень больших проектов (production)",
        ],
      },

      { type: "h", text: "Когда какой сборщик выбрать?" },
      {
        type: "l",
        items: [
          "Новый проект → Vite (рекомендуется)",
          "Нужна максимальная кастомизация и плагины → Webpack",
          "Очень большой legacy-проект → Webpack",
          "Хочешь максимальную скорость разработки → Vite",
        ],
      },

      {
        type: "w",
        text: "С 2024–2025 года Vite стал де-факто стандартом для новых React-проектов. Create React App постепенно устаревает.",
      },

      {
        type: "doc",
        text: "📖 Официальная документация",
        link: "https://vite.dev/guide/",
      },
    ],
  },
];
