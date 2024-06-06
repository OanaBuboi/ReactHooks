import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeSnippet from "./CodeSnipet";


export function AccordionListOne() {
    const sampleCode = `function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...
  `;

    const sampleCode2 = `function Button() {
  const theme = useContext(ThemeContext);
  // ...
  `;
    const sampleCode3 = `function Form() {
  const inputRef = useRef(null);
  // ...
`;
    const sampleCode4 = `function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
`;
    const sampleCode5 = `function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
`;
    const sampleCode6 = `const cachedFn = useCallback(fn, dependencies)
`;
    const sampleCode7 = `import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
`;
    const sampleCode8 = `import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...
`;
    const sampleCode9 = `function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...
`;
    const sampleCode10 = `function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ No need for the todos dependency
  // ...
`;
    const sampleCode11 = `function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    // ...
`;
    const sampleCode12 = ` useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // 🔴 Problem: This dependency changes on every render
  // ...
`;
    const sampleCode13 = ` function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Only changes when createOptions changes
  // ...
`;
    const sampleCode14 = ` function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() { // ✅ No need for useCallback or function dependencies!
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Only changes when roomId changes
  // ...
`;
    const sampleCode15 = ` const value = useContext(SomeContext)
`;
    const sampleCode16 = ` import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
`;
    const sampleCode17 = ` import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);
  // ...
`;
    const sampleCode18 = ` function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
`;
    const sampleCode19 = ` function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
`;
    const sampleCode20 = ` const ThemeContext = createContext(null);
`;
    const sampleCode21 = ` const ThemeContext = createContext('light');
`;
    const sampleCode22 = ` <ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
`;
    const sampleCode23 = `function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  function login(response) {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      <Page />
    </AuthContext.Provider>
  );
}
`;
    const sampleCode24 = `import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}
`;
    const sampleCode25 = `useDebugValue(value, format?)
`;
    const sampleCode26 = `import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}
`;
    const sampleCode27 = `import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}
`;
    const sampleCode28 = `useDebugValue(date, date => date.toDateString());
`;
    const sampleCode29 = `const deferredValue = useDeferredValue(value)
`;
    const sampleCode30 = `import { useState, useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  // ...
}
`;
    const sampleCode31 = `export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}
`;
    const sampleCode32 = `<div style={{
  opacity: query !== deferredQuery ? 0.5 : 1,
}}>
  <SearchResults query={deferredQuery} />
</div>
`;
    const sampleCode33 = `function App() {
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  );
}
`;
    const sampleCode34 = `const SlowList = memo(function SlowList({ text }) {
  // ...
});
`;
    const sampleCode35 = `function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
`;
    const sampleCode36 = `useEffect(setup, dependencies?)
`;
    const sampleCode37 = `import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
`;
    const sampleCode38 = `import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  \tconst connection = createConnection(serverUrl, roomId);
    connection.connect();
  \treturn () => {
      connection.disconnect();
  \t};
  }, [serverUrl, roomId]);
  // ...
}
`;
    const sampleCode39 = `const id = useId()
`;
    const sampleCode40 = `import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...
`;
    const sampleCode41 = `import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...
`;
    const sampleCode42 = `<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
`;
    const sampleCode43 = `useImperativeHandle(ref, createHandle, dependencies?)
`;
    const sampleCode44 = `import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, []);
  // ...
`;
    const sampleCode45 = `import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input {...props} ref={ref} />;
});
`;
    const sampleCode46 = `import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, []);

  return <input {...props} />;
});
`;
    const sampleCode47 = `const cachedValue = useMemo(calculateValue, dependencies)
`;
    const sampleCode48 = `import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
`;
    const sampleCode49 = `import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
`;
    const sampleCode50 = `function TodoList({ todos, tab, theme }) {
  const visibleTodos = filterTodos(todos, tab);
  // ...
}
`;
    const sampleCode51 = `const [state, dispatch] = useReducer(reducer, initialArg, init?)
`;
    const sampleCode52 = `import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
`;
    const sampleCode53 = `import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
`;
    const sampleCode54 = `function handleClick() {
  dispatch({ type: 'incremented_age' });
}
`;
    const sampleCode55 = `const ref = useRef(initialValue)
`;
    const sampleCode56 = `import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...
`;
    const sampleCode57 = `import { useRef } from 'react';

function Stopwatch() {
  const intervalRef = useRef(0);
  // ...
`;
    const sampleCode58 = `function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
}
`;
    const sampleCode59 = `function handleStopClick() {
  const intervalId = intervalRef.current;
  clearInterval(intervalId);
}
`;
    const sampleCode60 = `const [state, setState] = useState(initialState)
`;
    const sampleCode61 = `import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
`;
    const sampleCode62 = `import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
  // ...
`;
    const sampleCode63 = `function handleClick() {
  setName('Robin');
}
`;
    const sampleCode64 = `const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
`;
    const sampleCode65 = `Simport { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}
`;
    const sampleCode66 = `const LazyProductDetailPage = lazy(() => import('./ProductDetailPage.js'));

function ShoppingApp() {
  const selectedProductId = useSyncExternalStore(...);

  // ❌ Calling \`use\` with a Promise dependent on \`selectedProductId\`
  const data = use(fetchItem(selectedProductId))

  // ❌ Conditionally rendering a lazy component based on \`selectedProductId\`
  return selectedProductId != null ? <LazyProductDetailPage /> : <FeaturedProducts />;
}
`;
    const sampleCode67 = `import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}
`;
    const sampleCode68 = `const [isPending, startTransition] = useTransition()
`;
    const sampleCode69 = `import { useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  // ...
}
`;
    const sampleCode70 = `import { useState, useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  // ...
}
`;
    const sampleCode71 = `function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
`;
    return (
        <div style={{margin: '0 300px'}}>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2 className="header1">What is a Hook?</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <h3 style={{fontStyle: "bold", fontSize: 24, color: "red"}}>DEFINITION:</h3>
                    <p style={{fontSize: 20}}> Hooks allow us to "hook" into React features such as state and lifecycle
                        methods.</p>
                    <h3 style={{fontStyle: "bold", fontSize: 24, color: "red"}}>HOOKS RULES:</h3>
                    <p style={{fontSize: 20}}>There are 3 rules for hooks: </p>

                    <p style={{fontSize: 20}}> I) Hooks can only be called inside React function components. </p>
                    <p style={{fontSize: 20}}> II) Hooks can only be called at the top level of a component. </p>
                    <p style={{fontSize: 20}}> III) Hooks cannot be conditional</p>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h2 className="header1">State Hooks</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> State lets a component “remember” information like user input. </p>

                    <p style={{fontSize: 20}}> For example, a form component can use state to store the input value,
                        while an image gallery component can use state to store the selected image index. </p>

                    <p style={{fontSize: 20}}> To add state to a component, use one of these Hooks: </p>
                    <p style={{fontSize: 20}}> >useState - declares a state variable that you can update directly. </p>
                    <p style={{fontSize: 20}}> >useReducer - declares a state variable with the update logic inside a
                        reducer function.</p>

                    <div>
                        <CodeSnippet code={sampleCode} language="javascript"/>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">Context Hooks</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> Context lets a component receive information from distant parents without
                        passing it as props. </p>

                    <p style={{fontSize: 20}}> For example, your app’s top-level component can pass the current UI theme
                        to all components below, no matter how deep. </p>
                    <p style={{fontSize: 20}}> >useContext - reads and subscribes to a context. </p>
                    <CodeSnippet code={sampleCode2} language="javascript"/>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">Ref Hooks </h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> Refs let a component hold some information that isn’t used for rendering,
                        like a DOM node or a timeout ID. </p>
                    <p style={{fontSize: 20}}> Unlike with state, updating a ref does not re-render your component. </p>
                    <p style={{fontSize: 20}}> Refs are an “escape hatch” from the React paradigm. </p>
                    <p style={{fontSize: 20}}> They are useful when you need to work with non-React systems, such as the
                        built-in browser APIs. </p>

                    <p style={{fontSize: 20}}> >useRef - declares a ref. You can hold any value in it, but most often
                        it’s used to hold a DOM node. </p>
                    <p style={{fontSize: 20}}> >useImperativeHandle - lets you customize the ref exposed by your
                        component. This is rarely used. </p>

                    <div>
                        <CodeSnippet code={sampleCode3} language="javascript"/>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">Effect Hooks </h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> Effects let a component connect to and synchronize with external
                        systems. </p>
                    <p style={{fontSize: 20}}> This includes dealing with network, browser DOM, animations, widgets
                        written using a different UI library, and other non-React code. </p>
                    <p style={{fontSize: 20}}> >useEffect - connects a component to an external system. </p>

                    <div>
                        <CodeSnippet code={sampleCode4} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Effects are an “escape hatch” from the React paradigm. </p>

                    <p style={{fontStyle: "bold", fontSize: 30, color: "red"}}> Don’t use Effects to orchestrate the
                        data flow of your application! </p>

                    <p style={{fontSize: 20}}> If you’re not interacting with an external system, you might not need an
                        Effect. </p>
                    <p style={{fontSize: 20}}> There are two rarely used variations of useEffect with differences in
                        timing: </p>
                    <p style={{fontSize: 20}}> >useLayoutEffect - fires before the browser repaints the screen. You can
                        measure layout here. </p>
                    <p style={{fontSize: 20}}> >useInsertionEffect - fires before React makes changes to the DOM.
                        Libraries can insert dynamic CSS here. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header2">Performance Hooks </h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> A common way to optimize re-rendering performance is to skip unnecessary
                        work. </p>
                    <p style={{fontSize: 20}}> For example, you can tell React to reuse a cached calculation or to skip
                        a re-render if the data has not changed since the previous render. </p>
                    <p style={{fontSize: 20}}> To skip calculations and unnecessary re-rendering, use one of these
                        Hooks: </p>

                    <p style={{fontSize: 20}}> >useMemo - lets you cache the result of an expensive calculation. </p>

                    <p style={{fontSize: 20}}> >useCallback - lets you cache a function definition before passing it
                        down to an optimized component. </p>

                    <div>
                        <CodeSnippet code={sampleCode5} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Sometimes, you can’t skip re-rendering because the screen actually needs
                        to update. </p>

                    <p style={{fontSize: 20}}> In that case, you can improve performance by separating blocking updates
                        that must be synchronous (like typing into an input) from non-blocking updates which don’t need
                        to block the user interface (like updating a chart). </p>
                    <p style={{fontSize: 20}}> To prioritize rendering, use one of these Hooks: </p>

                    <p style={{fontSize: 20}}> >useTransition - lets you mark a state transition as non-blocking and
                        allow other updates to interrupt it. </p>
                    <p style={{fontSize: 20}}> >useDeferredValue - lets you defer updating a non-critical part of the UI
                        and let other parts update first. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">Other Hooks</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> These Hooks are mostly useful to library authors and aren’t commonly used
                        in the application code. </p>
                    <p style={{fontSize: 20}}> >useDebugValue - lets you customize the label React DevTools displays for
                        your custom Hook. </p>
                    <p style={{fontSize: 20}}> >useId - lets a component associate a unique ID with itself. Typically
                        used with accessibility APIs. </p>
                    <p style={{fontSize: 20}}> >useSyncExternalStore - lets a component subscribe to an external
                        store. </p>
                    <p style={{fontSize: 20}}> >useActionState - allows you to manage state of actions. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useCallback</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useCallback is a React Hook that lets you cache a function definition
                        between re-renders. </p>

                    <div>
                        <CodeSnippet code={sampleCode6} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useCallback(fn, dependencies) </h3>
                    <p style={{fontSize: 20}}> Call useCallback at the top level of your component to cache a function
                        definition between re-renders: </p>

                    <div>
                        <CodeSnippet code={sampleCode7} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >fn: The function value that you want to cache. It can take any arguments
                        and return any values. React will return (not call!) your function back to you during the
                        initial render. On next renders, React will give you the same function again if the dependencies
                        have not changed since the last render. Otherwise, it will give you the function that you have
                        passed during the current render, and store it in case it can be reused later. React will not
                        call your function. The function is returned to you so you can decide when and whether to call
                        it. </p>
                    <p style={{fontSize: 20}}> >dependencies: The list of all reactive values referenced inside of the
                        fn code. Reactive values include props, state, and all the variables and functions declared
                        directly inside your component body. If your linter is configured for React, it will verify that
                        every reactive value is correctly specified as a dependency. The list of dependencies must have
                        a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare
                        each dependency with its previous value using the Object.is comparison algorithm. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> On the initial render, useCallback returns the fn function you have
                        passed. </p>
                    <p style={{fontSize: 20}}> During subsequent renders, it will either return an already stored fn
                        function from the last render (if the dependencies haven’t changed), or return the fn function
                        you have passed during this render. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useCallback is a Hook, so you can only call it at the top level of your
                        component or your own Hooks. You can’t call it inside loops or conditions. If you need that,
                        extract a new component and move the state into it. </p>
                    <p style={{fontSize: 20}}> >React will not throw away the cached function unless there is a specific
                        reason to do that. For example, in development, React throws away the cache when you edit the
                        file of your component. Both in development and in production, React will throw away the cache
                        if your component suspends during the initial mount. In the future, React may add more features
                        that take advantage of throwing away the cache—for example, if React adds built-in support for
                        virtualized lists in the future, it would make sense to throw away the cache for items that
                        scroll out of the virtualized table viewport. This should match your expectations if you rely on
                        useCallback as a performance optimization. Otherwise, a state variable or a ref may be more
                        appropriate. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Skipping re-rendering of components </h4>
                    <p style={{fontSize: 20}}> When you optimize rendering performance, you will sometimes need to cache
                        the functions that you pass to child components. </p>
                    <p style={{fontSize: 20}}> Let’s first look at the syntax for how to do this, and then see in which
                        cases it’s useful. </p>
                    <p style={{fontSize: 20}}> To cache a function between re-renders of your component, wrap its
                        definition into the useCallback Hook: </p>

                    <div>
                        <CodeSnippet code={sampleCode8} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> You need to pass two things to useCallback: </p>
                    <p style={{fontSize: 20}}> 1.A function definition that you want to cache between re-renders. </p>
                    <p style={{fontSize: 20}}> 2.A list of dependencies including every value within your component
                        that’s used inside your function. </p>
                    <p style={{fontSize: 20}}> On the initial render, the returned function you’ll get from useCallback
                        will be the function you passed. </p>
                    <p style={{fontSize: 20}}> On the following renders, React will compare the dependencies with the
                        dependencies you passed during the previous render. </p>
                    <p style={{fontSize: 20}}> If none of the dependencies have changed (compared with Object.is),
                        useCallback will return the same function as before. </p>
                    <p style={{fontSize: 20}}> Otherwise, useCallback will return the function you passed on this
                        render. </p>
                    <p style={{fontSize: 20}}> In other words, useCallback caches a function between re-renders until
                        its dependencies change. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Updating state from a memoized callback </h4>
                    <p style={{fontSize: 20}}> Sometimes, you might need to update state based on previous state from a
                        memoized callback. </p>
                    <p style={{fontSize: 20}}> This handleAddTodo function specifies todos as a dependency because it
                        computes the next todos from it: </p>

                    <div>
                        <CodeSnippet code={sampleCode9} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> You’ll usually want memoized functions to have as few dependencies as
                        possible. </p>
                    <p style={{fontSize: 20}}> When you read some state only to calculate the next state, you can remove
                        that dependency by passing an updater function instead: </p>

                    <div>
                        <CodeSnippet code={sampleCode10} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Here, instead of making todos a dependency and reading it inside, you
                        pass an instruction about how to update the state (todos => [...todos, newTodo]) to React. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Preventing an Effect from firing too often </h4>
                    <p style={{fontSize: 20}}> Sometimes, you might want to call a function from inside an Effect: </p>

                    <div>
                        <CodeSnippet code={sampleCode11} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> This creates a problem. </p>
                    <p style={{fontSize: 20}}> Every reactive value must be declared as a dependency of your
                        Effect. </p>
                    <p style={{fontSize: 20}}> However, if you declare createOptions as a dependency, it will cause your
                        Effect to constantly reconnect to the chat room: </p>

                    <div>
                        <CodeSnippet code={sampleCode12} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> To solve this, you can wrap the function you need to call from an Effect
                        into useCallback: </p>

                    <div>
                        <CodeSnippet code={sampleCode13} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> This ensures that the createOptions function is the same between
                        re-renders if the roomId is the same. </p>
                    <p style={{fontSize: 20}}> However, it’s even better to remove the need for a function
                        dependency. </p>
                    <p style={{fontSize: 20}}> Move your function inside the Effect: </p>

                    <div>
                        <CodeSnippet code={sampleCode14} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Now your code is simpler and doesn’t need useCallback. </p>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useContext</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useContext is a React Hook that lets you read and subscribe to context
                        from your component. </p>

                    <div>
                        <CodeSnippet code={sampleCode15} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useContext(SomeContext) </h3>
                    <p style={{fontSize: 20}}> Call useContext at the top level of your component to read and subscribe
                        to context. </p>

                    <div>
                        <CodeSnippet code={sampleCode16} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >SomeContext: The context that you’ve previously created with
                        createContext. The context itself does not hold the information, it only represents the kind of
                        information you can provide or read from components. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> >useContext - returns the context value for the calling component. It is
                        determined as the value passed to the closest SomeContext.Provider above the calling component
                        in the tree. If there is no such provider, then the returned value will be the defaultValue you
                        have passed to createContext for that context. The returned value is always up-to-date. React
                        automatically re-renders components that read some context if it changes.</p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useContext() - call in a component is not affected by providers returned
                        from the same component. The corresponding Context.Provider needs to be above the component
                        doing the useContext() call. </p>
                    <p style={{fontSize: 20}}> >React automatically re-renders all the children that use a particular
                        context starting from the provider that receives a different value. The previous and the next
                        values are compared with the Object.is comparison. Skipping re-renders with memo does not
                        prevent the children receiving fresh context values. </p>
                    <p style={{fontSize: 20}}> >If your build system produces duplicates modules in the output (which
                        can happen with symlinks), this can break context. Passing something via context only works if
                        SomeContext that you use to provide context and SomeContext that you use to read it are exactly
                        the same object, as determined by a === comparison. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Passing data deeply into the tree </h4>
                    <p style={{fontSize: 20}}> Call useContext at the top level of your component to read and subscribe
                        to context. </p>

                    <div>
                        <CodeSnippet code={sampleCode17} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> useContext returns the context value for the context you passed. </p>
                    <p style={{fontSize: 20}}> To determine the context value, React searches the component tree and
                        finds the closest context provider above for that particular context. </p>
                    <p style={{fontSize: 20}}> To pass context to a Button, wrap it or one of its parent components into
                        the corresponding context provider: </p>

                    <div>
                        <CodeSnippet code={sampleCode18} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> It doesn’t matter how many layers of components there are between the
                        provider and the Button. </p>
                    <p style={{fontSize: 20}}> When a Button anywhere inside of Form calls useContext(ThemeContext), it
                        will receive "dark" as the value. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Updating data passed via context </h4>
                    <p style={{fontSize: 20}}> Often, you’ll want the context to change over time. </p>
                    <p style={{fontSize: 20}}> To update context, combine it with state. </p>
                    <p style={{fontSize: 20}}> Declare a state variable in the parent component, and pass the current
                        state down as the context value to the provider. </p>

                    <div>
                        <CodeSnippet code={sampleCode19} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Now any Button inside of the provider will receive the current theme
                        value. </p>
                    <p style={{fontSize: 20}}> If you call setTheme to update the theme value that you pass to the
                        provider, all Button components will re-render with the new 'light' value. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Specifying a fallback default value </h4>
                    <p style={{fontSize: 20}}> If React can’t find any providers of that particular context in the
                        parent tree, the context value returned by useContext() will be equal to the default value that
                        you specified when you created that context: </p>

                    <div>
                        <CodeSnippet code={sampleCode20} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> The default value never changes. </p>
                    <p style={{fontSize: 20}}> If you want to update context, use it with state as described above. </p>
                    <p style={{fontSize: 20}}> Often, instead of null, there is some more meaningful value you can use
                        as a default, for example: </p>

                    <div>
                        <CodeSnippet code={sampleCode21} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> This way, if you accidentally render some component without a
                        corresponding provider, it won’t break. </p>
                    <p style={{fontSize: 20}}> This also helps your components work well in a test environment without
                        setting up a lot of providers in the tests. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Overriding context for a part of the tree</h4>
                    <p style={{fontSize: 20}}> You can override the context for a part of the tree by wrapping that part
                        in a provider with a different value. </p>

                    <div>
                        <CodeSnippet code={sampleCode22} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> You can nest and override providers as many times as you need. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Optimizing re-renders when passing objects and
                        functions</h4>
                    <p style={{fontSize: 20}}> You can pass any values via context, including objects and
                        functions. </p>

                    <div>
                        <CodeSnippet code={sampleCode23} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Here, the context value is a JavaScript object with two properties, one
                        of which is a function. </p>
                    <p style={{fontSize: 20}}> Whenever MyApp re-renders (for example, on a route update), this will be
                        a different object pointing at a different function, so React will also have to re-render all
                        components deep in the tree that call useContext(AuthContext). </p>
                    <p style={{fontSize: 20}}> In smaller apps, this is not a problem. </p>
                    <p style={{fontSize: 20}}> However, there is no need to re-render them if the underlying data, like
                        currentUser, has not changed. </p>
                    <p style={{fontSize: 20}}> To help React take advantage of that fact, you may wrap the login
                        function with useCallback and wrap the object creation into useMemo. </p>
                    <p style={{fontSize: 20}}> This is a performance optimization: </p>

                    <div>
                        <CodeSnippet code={sampleCode24} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> As a result of this change, even if MyApp needs to re-render, the
                        components calling useContext(AuthContext) won’t need to re-render unless currentUser has
                        changed. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useDebugValue</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useDebugValue is a React Hook that lets you add a label to a custom Hook
                        in React DevTools. </p>

                    <div>
                        <CodeSnippet code={sampleCode25} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useDebugValue(value, format?)</h3>
                    <p style={{fontSize: 20}}> Call useDebugValue at the top level of your custom Hook to display a
                        readable debug value: </p>

                    <div>
                        <CodeSnippet code={sampleCode26} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >value: The value you want to display in React DevTools. It can have any
                        type. </p>
                    <p style={{fontSize: 20}}> >optional format: A formatting function. When the component is inspected,
                        React DevTools will call the formatting function with the value as the argument, and then
                        display the returned formatted value (which may have any type). If you don’t specify the
                        formatting function, the original value itself will be displayed. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> useDebugValue does not return anything.</p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Adding a label to a custom Hook</h4>
                    <p style={{fontSize: 20}}> Call useDebugValue at the top level of your custom Hook to display a
                        readable debug value for React DevTools. </p>

                    <div>
                        <CodeSnippet code={sampleCode27} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> This gives components calling useOnlineStatus a label like OnlineStatus:
                        "Online" when you inspect them. </p>
                    <p style={{fontSize: 20}}> Without the useDebugValue call, only the underlying data would be
                        displayed. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Deferring formatting of a debug value </h4>
                    <p style={{fontSize: 20}}> You can also pass a formatting function as the second argument to
                        useDebugValue: </p>

                    <div>
                        <CodeSnippet code={sampleCode28} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> Your formatting function will receive the debug value as a parameter and
                        should return a formatted display value. </p>
                    <p style={{fontSize: 20}}> When your component is inspected, React DevTools will call this function
                        and display its result. </p>
                    <p style={{fontSize: 20}}> This lets you avoid running potentially expensive formatting logic unless
                        the component is actually inspected. </p>
                    <p style={{fontSize: 20}}> For example, if date is a Date value, this avoids calling toDateString()
                        on it for every render. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useDeferredValue</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useDeferredValue is a React Hook that lets you defer updating a part of
                        the UI. </p>

                    <div>
                        <CodeSnippet code={sampleCode29} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useDeferredValue(value, initialValue?)</h3>
                    <p style={{fontSize: 20}}> Call useDeferredValue at the top level of your component to get a
                        deferred version of that value. </p>

                    <div>
                        <CodeSnippet code={sampleCode30} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >value: The value you want to defer. It can have any type. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> >currentValue: During the initial render, the returned deferred value
                        will be the same as the value you provided. During updates, React will first attempt a re-render
                        with the old value (so it will return the old value), and then try another re-render in the
                        background with the new value (so it will return the updated value). </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >When an update is inside a Transition, useDeferredValue always returns
                        the new value and does not spawn a deferred render, since the update is already deferred. </p>
                    <p style={{fontSize: 20}}> >The values you pass to useDeferredValue should either be primitive
                        values (like strings and numbers) or objects created outside of rendering. If you create a new
                        object during rendering and immediately pass it to useDeferredValue, it will be different on
                        every render, causing unnecessary background re-renders. </p>
                    <p style={{fontSize: 20}}> >When useDeferredValue receives a different value (compared with
                        Object.is), in addition to the current render (when it still uses the previous value), it
                        schedules a re-render in the background with the new value. The background re-render is
                        interruptible: if there’s another update to the value, React will restart the background
                        re-render from scratch. For example, if the user is typing into an input faster than a chart
                        receiving its deferred value can re-render, the chart will only re-render after the user stops
                        typing. </p>
                    <p style={{fontSize: 20}}> >useDeferredValue is integrated with Suspense . If the background update
                        caused by a new value suspends the UI, the user will not see the fallback. They will see the old
                        deferred value until the data loads. </p>
                    <p style={{fontSize: 20}}> >useDeferredValue does not by itself prevent extra network requests. </p>
                    <p style={{fontSize: 20}}> >There is no fixed delay caused by useDeferredValue itself. As soon as
                        React finishes the original re-render, React will immediately start working on the background
                        re-render with the new deferred value. Any updates caused by events (like typing) will interrupt
                        the background re-render and get prioritized over it. </p>
                    <p style={{fontSize: 20}}> >The background re-render caused by useDeferredValue does not fire
                        Effects until it’s committed to the screen. If the background re-render suspends, its Effects
                        will run after the data loads and the UI updates. </p>


                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Showing stale content while fresh content is
                        loading</h4>
                    <p style={{fontSize: 20}}> Call useDeferredValue at the top level of your component to defer
                        updating some part of your UI. </p>

                    <div>
                        <CodeSnippet code={sampleCode30} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> During the initial render, the deferred value will be the same as the
                        value you provided. </p>
                    <p style={{fontSize: 20}}> During updates, the deferred value will “lag behind” the latest
                        value. </p>
                    <p style={{fontSize: 20}}> In particular, React will first re-render without updating the deferred
                        value, and then try to re-render with the newly received value in the background.</p>

                    <p style={{fontSize: 20}}> A common alternative UI pattern is to defer updating the list of results
                        and to keep showing the previous results until the new results are ready.</p>
                    <p style={{fontSize: 20}}> Call useDeferredValue to pass a deferred version of the query down:</p>

                    <div>
                        <CodeSnippet code={sampleCode31} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> The query will update immediately, so the input will display the new
                        value. </p>
                    <p style={{fontSize: 20}}> However, the deferredQuery will keep its previous value until the data
                        has loaded, so SearchResults will show the stale results for a bit. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Indicating that the content is stale</h4>
                    <p style={{fontSize: 20}}> In the example above, there is no indication that the result list for the
                        latest query is still loading. </p>
                    <p style={{fontSize: 20}}> This can be confusing to the user if the new results take a while to
                        load. </p>
                    <p style={{fontSize: 20}}> To make it more obvious to the user that the result list does not match
                        the latest query, you can add a visual indication when the stale result list is displayed:</p>

                    <div>
                        <CodeSnippet code={sampleCode32} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> With this change, as soon as you start typing, the stale result list gets
                        slightly dimmed until the new result list loads. </p>
                    <p style={{fontSize: 20}}> You can also add a CSS transition to delay dimming so that it feels
                        gradual. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Deferring re-rendering for a part of the UI </h4>
                    <p style={{fontSize: 20}}> You can also apply useDeferredValue as a performance optimization. </p>
                    <p style={{fontSize: 20}}> It is useful when a part of your UI is slow to re-render, there’s no easy
                        way to optimize it, and you want to prevent it from blocking the rest of the UI. </p>
                    <p style={{fontSize: 20}}> Imagine you have a text field and a component (like a chart or a long
                        list) that re-renders on every keystroke: </p>

                    <div>
                        <CodeSnippet code={sampleCode33} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> First, optimize SlowList to skip re-rendering when its props are the
                        same. </p>
                    <p style={{fontSize: 20}}> To do this, wrap it in memo: </p>

                    <div>
                        <CodeSnippet code={sampleCode34} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> However, this only helps if the SlowList props are the same as during the
                        previous render. </p>
                    <p style={{fontSize: 20}}> The problem you’re facing now is that it’s slow when they’re different,
                        and when you actually need to show different visual output.</p>
                    <p style={{fontSize: 20}}> Concretely, the main performance problem is that whenever you type into
                        the input, the SlowList receives new props, and re-rendering its entire tree makes the typing
                        feel janky.</p>
                    <p style={{fontSize: 20}}> In this case, useDeferredValue lets you prioritize updating the input
                        (which must be fast) over updating the result list (which is allowed to be slower):</p>

                    <div>
                        <CodeSnippet code={sampleCode35} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> This does not make re-rendering of the SlowList faster. </p>
                    <p style={{fontSize: 20}}> However, it tells React that re-rendering the list can be deprioritized
                        so that it doesn’t block the keystrokes. </p>
                    <p style={{fontSize: 20}}> The list will “lag behind” the input and then “catch up”. </p>
                    <p style={{fontSize: 20}}> Like before, React will attempt to update the list as soon as possible,
                        but will not block the user from typing. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useEffect</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useEffect is a React Hook that lets you synchronize a component with an
                        external system. </p>

                    <div>
                        <CodeSnippet code={sampleCode36} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useEffect(setup, dependencies?)</h3>
                    <p style={{fontSize: 20}}> Call useEffect at the top level of your component to declare an
                        Effect: </p>

                    <div>
                        <CodeSnippet code={sampleCode37} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >setup: The function with your Effect’s logic. Your setup function may
                        also optionally return a cleanup function. When your component is added to the DOM, React will
                        run your setup function. After every re-render with changed dependencies, React will first run
                        the cleanup function (if you provided it) with the old values, and then run your setup function
                        with the new values. After your component is removed from the DOM, React will run your cleanup
                        function. </p>
                    <p style={{fontSize: 20}}> >optional dependencies: The list of all reactive values referenced inside
                        of the setup code. Reactive values include props, state, and all the variables and functions
                        declared directly inside your component body. If your linter is configured for React, it will
                        verify that every reactive value is correctly specified as a dependency. The list of
                        dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].
                        React will compare each dependency with its previous value using the Object.is comparison. If
                        you omit this argument, your Effect will re-run after every re-render of the component. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> >useEffect returns undefined. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useEffect is a Hook, so you can only call it at the top level of your
                        component or your own Hooks. You can’t call it inside loops or conditions. If you need that,
                        extract a new component and move the state into it. </p>
                    <p style={{fontSize: 20}}> >If you’re not trying to synchronize with some external system, you
                        probably don’t need an Effect. </p>
                    <p style={{fontSize: 20}}> >When Strict Mode is on, React will run one extra development-only
                        setup+cleanup cycle before the first real setup. This is a stress-test that ensures that your
                        cleanup logic “mirrors” your setup logic and that it stops or undoes whatever the setup is
                        doing. If this causes a problem, implement the cleanup function. </p>
                    <p style={{fontSize: 20}}> >If some of your dependencies are objects or functions defined inside the
                        component, there is a risk that they will cause the Effect to re-run more often than needed. To
                        fix this, remove unnecessary object and function dependencies. You can also extract state
                        updates and non-reactive logic outside of your Effect. </p>
                    <p style={{fontSize: 20}}> >If your Effect wasn’t caused by an interaction (like a click), React
                        will generally let the browser paint the updated screen first before running your Effect. If
                        your Effect is doing something visual (for example, positioning a tooltip), and the delay is
                        noticeable (for example, it flickers), replace useEffect with useLayoutEffect. </p>
                    <p style={{fontSize: 20}}> >If your Effect is caused by an interaction (like a click), React may run
                        your Effect before the browser paints the updated screen. This ensures that the result of the
                        Effect can be observed by the event system. Usually, this works as expected. However, if you
                        must defer the work until after paint, such as an alert(), you can use setTimeout. See
                        reactwg/react-18/128 for more information. </p>
                    <p style={{fontSize: 20}}> >Even if your Effect was caused by an interaction (like a click), React
                        may allow the browser to repaint the screen before processing the state updates inside your
                        Effect. Usually, this works as expected. However, if you must block the browser from repainting
                        the screen, you need to replace useEffect with useLayoutEffect. </p>
                    <p style={{fontSize: 20}}> >Effects only run on the client. They don’t run during server
                        rendering. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Connecting to an external system</h4>
                    <p style={{fontSize: 20}}> Some components need to stay connected to the network, some browser API,
                        or a third-party library, while they are displayed on the page. These systems aren’t controlled
                        by React, so they are called external. </p>
                    <p style={{fontSize: 20}}> To connect your component to some external system, call useEffect at the
                        top level of your component: </p>

                    <div>
                        <CodeSnippet code={sampleCode38} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> You need to pass two arguments to useEffect: </p>
                    <p style={{fontSize: 20}}> 1.A setup function with setup code that connects to that system. </p>
                    <p style={{fontSize: 20}}> >It should return a cleanup function with cleanup code that disconnects
                        from that system.</p>
                    <p style={{fontSize: 20}}> 2.A list of dependencies including every value from your component used
                        inside of those functions.</p>
                    <p style={{fontSize: 20}}> React calls your setup and cleanup functions whenever it’s necessary,
                        which may happen multiple times:</p>
                    <p style={{fontSize: 20}}> 1.Your setup code runs when your component is added to the page
                        (mounts).</p>
                    <p style={{fontSize: 20}}> 2.After every re-render of your component where the dependencies have
                        changed:</p>
                    <p style={{fontSize: 20}}> >First, your cleanup code runs with the old props and state.</p>
                    <p style={{fontSize: 20}}> >Then, your setup code runs with the new props and state.</p>
                    <p style={{fontSize: 20}}> 3.Your cleanup code runs one final time after your component is removed
                        from the page (unmounts).</p>

                    <p style={{fontSize: 20}}> Let’s illustrate this sequence for the example above. </p>
                    <p style={{fontSize: 20}}> When the ChatRoom component above gets added to the page, it will connect
                        to the chat room with the initial serverUrl and roomId. If either serverUrl or roomId change as
                        a result of a re-render (say, if the user picks a different chat room in a dropdown), your
                        Effect will disconnect from the previous room, and connect to the next one. When the ChatRoom
                        component is removed from the page, your Effect will disconnect one last time. </p>
                    <p style={{fontSize: 20}}> To help you find bugs, in development React runs setup and cleanup one
                        extra time before the setup. This is a stress-test that verifies your Effect’s logic is
                        implemented correctly. If this causes visible issues, your cleanup function is missing some
                        logic. The cleanup function should stop or undo whatever the setup function was doing. The rule
                        of thumb is that the user shouldn’t be able to distinguish between the setup being called once
                        (as in production) and a setup → cleanup → setup sequence (as in development). </p>
                    <p style={{fontSize: 20}}> Try to write every Effect as an independent process and think about a
                        single setup/cleanup cycle at a time. It shouldn’t matter whether your component is mounting,
                        updating, or unmounting. When your cleanup logic correctly “mirrors” the setup logic, your
                        Effect is resilient to running setup and cleanup as often as needed. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useId</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useId is a React Hook for generating unique IDs that can be passed to
                        accessibility attributes. </p>

                    <div>
                        <CodeSnippet code={sampleCode39} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useId()</h3>
                    <p style={{fontSize: 20}}> Call useId at the top level of your component to generate a unique
                        ID: </p>

                    <div>
                        <CodeSnippet code={sampleCode40} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >useId does not take any parameters. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> >useId returns a unique ID string associated with this particular useId
                        call in this particular component. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useId is a Hook, so you can only call it at the top level of your
                        component or your own Hooks. You can’t call it inside loops or conditions. If you need that,
                        extract a new component and move the state into it. </p>
                    <p style={{fontSize: 20}}> >useId should not be used to generate keys in a list. Keys should be
                        generated from your data. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Generating unique IDs for accessibility
                        attributes </h4>
                    <p style={{fontSize: 20}}> Call useId at the top level of your component to generate a unique
                        ID: </p>

                    <div>
                        <CodeSnippet code={sampleCode41} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> You can then pass the generated ID to different attributes: </p>

                    <div>
                        <CodeSnippet code={sampleCode42} language="javascript"/>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header3">useImperativeHandle</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useImperativeHandle is a React Hook that lets you customize the handle
                        exposed as a ref. </p>

                    <div>
                        <CodeSnippet code={sampleCode43} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useImperativeHandle(ref, createHandle,
                        dependencies?)</h3>
                    <p style={{fontSize: 20}}> Call useImperativeHandle at the top level of your component to customize
                        the ref handle it exposes: </p>

                    <div>
                        <CodeSnippet code={sampleCode44} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >ref: The ref you received as the second argument from the forwardRef
                        render function. </p>
                    <p style={{fontSize: 20}}> >createHandle: A function that takes no arguments and returns the ref
                        handle you want to expose. That ref handle can have any type. Usually, you will return an object
                        with the methods you want to expose. </p>
                    <p style={{fontSize: 20}}> >optional dependencies: The list of all reactive values referenced inside
                        of the createHandle code. Reactive values include props, state, and all the variables and
                        functions declared directly inside your component body. If your linter is configured for React,
                        it will verify that every reactive value is correctly specified as a dependency. The list of
                        dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].
                        React will compare each dependency with its previous value using the Object.is comparison. If a
                        re-render resulted in a change to some dependency, or if you omitted this argument, your
                        createHandle function will re-execute, and the newly created handle will be assigned to the
                        ref. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> >useImperativeHandle returns undefined. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Exposing a custom ref handle to the parent
                        component </h4>
                    <p style={{fontSize: 20}}> By default, components don’t expose their DOM nodes to parent components.
                        For example, if you want the parent component of MyInput to have access to the input DOM node,
                        you have to opt in with forwardRef: </p>

                    <div>
                        <CodeSnippet code={sampleCode45} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> With the code above, a ref to MyInput will receive the input DOM node.
                        However, you can expose a custom value instead. To customize the exposed handle, call
                        useImperativeHandle at the top level of your component: </p>

                    <div>
                        <CodeSnippet code={sampleCode46} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> Note that in the code above, the ref is no longer forwarded to the
                        input. </p>
                    <p style={{fontSize: 20}}> For example, suppose you don’t want to expose the entire input DOM node,
                        but you want to expose two of its methods: focus and scrollIntoView. To do this, keep the real
                        browser DOM in a separate ref. Then use useImperativeHandle to expose a handle with only the
                        methods that you want the parent component to call: </p>
                    <p style={{fontSize: 20}}> Now, if the parent component gets a ref to MyInput, it will be able to
                        call the focus and scrollIntoView methods on it. However, it will not have full access to the
                        underlying input DOM node. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useMemo</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useMemo is a React Hook that lets you cache the result of a calculation
                        between re-renders. </p>

                    <div>
                        <CodeSnippet code={sampleCode47} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useMemo(calculateValue, dependencies)</h3>
                    <p style={{fontSize: 20}}> Call useMemo at the top level of your component to cache a calculation
                        between re-renders: </p>

                    <div>
                        <CodeSnippet code={sampleCode48} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >calculateValue: The function calculating the value that you want to
                        cache. It should be pure, should take no arguments, and should return a value of any type. React
                        will call your function during the initial render. On next renders, React will return the same
                        value again if the dependencies have not changed since the last render. Otherwise, it will call
                        calculateValue, return its result, and store it so it can be reused later. </p>
                    <p style={{fontSize: 20}}> >dependencies: The list of all reactive values referenced inside of the
                        calculateValue code. Reactive values include props, state, and all the variables and functions
                        declared directly inside your component body. If your linter is configured for React, it will
                        verify that every reactive value is correctly specified as a dependency. The list of
                        dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].
                        React will compare each dependency with its previous value using the Object.is comparison. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> On the initial render, useMemo returns the result of calling
                        calculateValue with no arguments. </p>
                    <p style={{fontSize: 20}}> During next renders, it will either return an already stored value from
                        the last render (if the dependencies haven’t changed), or call calculateValue again, and return
                        the result that calculateValue has returned. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useMemo is a Hook, so you can only call it at the top level of your
                        component or your own Hooks. You can’t call it inside loops or conditions. If you need that,
                        extract a new component and move the state into it. </p>
                    <p style={{fontSize: 20}}> >In Strict Mode, React will call your calculation function twice in order
                        to help you find accidental impurities. This is development-only behavior and does not affect
                        production. If your calculation function is pure (as it should be), this should not affect your
                        logic. The result from one of the calls will be ignored. </p>
                    <p style={{fontSize: 20}}> >React will not throw away the cached value unless there is a specific
                        reason to do that. For example, in development, React throws away the cache when you edit the
                        file of your component. Both in development and in production, React will throw away the cache
                        if your component suspends during the initial mount. In the future, React may add more features
                        that take advantage of throwing away the cache—for example, if React adds built-in support for
                        virtualized lists in the future, it would make sense to throw away the cache for items that
                        scroll out of the virtualized table viewport. This should be fine if you rely on useMemo solely
                        as a performance optimization. Otherwise, a state variable or a ref may be more
                        appropriate. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Skipping expensive recalculations </h4>
                    <p style={{fontSize: 20}}> To cache a calculation between re-renders, wrap it in a useMemo call at
                        the top level of your component: </p>

                    <div>
                        <CodeSnippet code={sampleCode49} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> You need to pass two things to useMemo: </p>
                    <p style={{fontSize: 20}}> 1.A calculation function that takes no arguments, like () =>, and returns
                        what you wanted to calculate. </p>
                    <p style={{fontSize: 20}}> 2.A list of dependencies including every value within your component
                        that’s used inside your calculation. </p>
                    <p style={{fontSize: 20}}> On the initial render, the value you’ll get from useMemo will be the
                        result of calling your calculation. </p>
                    <p style={{fontSize: 20}}> On every subsequent render, React will compare the dependencies with the
                        dependencies you passed during the last render. If none of the dependencies have changed
                        (compared with Object.is), useMemo will return the value you already calculated before.
                        Otherwise, React will re-run your calculation and return the new value. </p>
                    <p style={{fontSize: 20}}> In other words, useMemo caches a calculation result between re-renders
                        until its dependencies change. </p>
                    <p style={{fontSize: 20}}> Let’s walk through an example to see when this is useful. </p>
                    <p style={{fontSize: 20}}> By default, React will re-run the entire body of your component every
                        time that it re-renders. For example, if this TodoList updates its state or receives new props
                        from its parent, the filterTodos function will re-run: </p>

                    <div>
                        <CodeSnippet code={sampleCode50} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> Usually, this isn’t a problem because most calculations are very fast.
                        However, if you’re filtering or transforming a large array, or doing some expensive computation,
                        you might want to skip doing it again if data hasn’t changed. If both todos and tab are the same
                        as they were during the last render, wrapping the calculation in useMemo like earlier lets you
                        reuse visibleTodos you’ve already calculated before. </p>
                    <p style={{fontSize: 20}}> This type of caching is called memoization. </p>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useReducer</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useReducer is a React Hook that lets you add a reducer to your
                        component. </p>

                    <div>
                        <CodeSnippet code={sampleCode51} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useReducer(reducer, initialArg, init?)</h3>
                    <p style={{fontSize: 20}}> Call useReducer at the top level of your component to manage its state
                        with a reducer. </p>

                    <div>
                        <CodeSnippet code={sampleCode52} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >reducer: The reducer function that specifies how the state gets updated.
                        It must be pure, should take the state and action as arguments, and should return the next
                        state. State and action can be of any types. </p>
                    <p style={{fontSize: 20}}> >initialArg: The value from which the initial state is calculated. It can
                        be a value of any type. How the initial state is calculated from it depends on the next init
                        argument. </p>
                    <p style={{fontSize: 20}}> >optional init: The initializer function that should return the initial
                        state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial
                        state is set to the result of calling init(initialArg). </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> useReducer returns an array with exactly two values: </p>
                    <p style={{fontSize: 20}}> 1.The current state. During the first render, it’s set to
                        init(initialArg) or initialArg (if there’s no init). </p>
                    <p style={{fontSize: 20}}> 2.The dispatch function that lets you update the state to a different
                        value and trigger a re-render. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useReducer is a Hook, so you can only call it at the top level of your
                        component or your own Hooks. You can’t call it inside loops or conditions. If you need that,
                        extract a new component and move the state into it. </p>
                    <p style={{fontSize: 20}}> >In Strict Mode, React will call your reducer and initializer twice in
                        order to help you find accidental impurities. This is development-only behavior and does not
                        affect production. If your reducer and initializer are pure (as they should be), this should not
                        affect your logic. The result from one of the calls is ignored. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Adding a reducer to a component </h4>
                    <p style={{fontSize: 20}}> Call useReducer at the top level of your component to manage state with a
                        reducer. </p>

                    <div>
                        <CodeSnippet code={sampleCode53} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> useReducer returns an array with exactly two items: </p>
                    <p style={{fontSize: 20}}> 1.The current state of this state variable, initially set to the initial
                        state you provided. </p>
                    <p style={{fontSize: 20}}> 2.The dispatch function that lets you change it in response to
                        interaction. </p>
                    <p style={{fontSize: 20}}> To update what’s on the screen, call dispatch with an object representing
                        what the user did, called an action: </p>

                    <div>
                        <CodeSnippet code={sampleCode54} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> React will pass the current state and the action to your reducer
                        function. Your reducer will calculate and return the next state. React will store that next
                        state, render your component with it, and update the UI. </p>
                    <p style={{fontSize: 20}}> useReducer is very similar to useState, but it lets you move the state
                        update logic from event handlers into a single function outside of your component. Read more
                        about choosing between useState and useReducer. </p>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useRef</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useRef is a React Hook that lets you reference a value that’s not needed
                        for rendering. </p>

                    <div>
                        <CodeSnippet code={sampleCode55} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useRef(initialValue)</h3>
                    <p style={{fontSize: 20}}> Call useRef at the top level of your component to declare a ref. </p>

                    <div>
                        <CodeSnippet code={sampleCode56} language="javascript"/>
                    </div>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >initialValue: The value you want the ref object’s current property to be
                        initially. It can be a value of any type. This argument is ignored after the initial
                        render. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> useRef returns an object with a single property: </p>
                    <p style={{fontSize: 20}}> >current: Initially, it’s set to the initialValue you have passed. You
                        can later set it to something else. If you pass the ref object to React as a ref attribute to a
                        JSX node, React will set its current property. </p>
                    <p style={{fontSize: 20}}> On the next renders, useRef will return the same object. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >You can mutate the ref.current property. Unlike state, it is mutable.
                        However, if it holds an object that is used for rendering (for example, a piece of your state),
                        then you shouldn’t mutate that object. </p>
                    <p style={{fontSize: 20}}> >When you change the ref.current property, React does not re-render your
                        component. React is not aware of when you change it because a ref is a plain JavaScript
                        object. </p>
                    <p style={{fontSize: 20}}> >Do not write or read ref.current during rendering, except for
                        initialization. This makes your component’s behavior unpredictable. </p>
                    <p style={{fontSize: 20}}> >In Strict Mode, React will call your component function twice in order
                        to help you find accidental impurities. This is development-only behavior and does not affect
                        production. Each ref object will be created twice, but one of the versions will be discarded. If
                        your component function is pure (as it should be), this should not affect the behavior. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Referencing a value with a ref </h4>
                    <p style={{fontSize: 20}}> Call useRef at the top level of your component to declare one or more
                        refs. </p>

                    <div>
                        <CodeSnippet code={sampleCode57} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> useRef returns a ref object with a single current property initially set
                        to the initial value you provided. </p>
                    <p style={{fontSize: 20}}> On the next renders, useRef will return the same object. You can change
                        its current property to store information and read it later. This might remind you of state, but
                        there is an important difference. </p>
                    <p style={{fontSize: 20}}> Changing a ref does not trigger a re-render. This means refs are perfect
                        for storing information that doesn’t affect the visual output of your component. For example, if
                        you need to store an interval ID and retrieve it later, you can put it in a ref. To update the
                        value inside the ref, you need to manually change its current property: </p>

                    <div>
                        <CodeSnippet code={sampleCode58} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> Later, you can read that interval ID from the ref so that you can call
                        clear that interval: </p>

                    <div>
                        <CodeSnippet code={sampleCode59} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> By using a ref, you ensure that: </p>
                    <p style={{fontSize: 20}}> >You can store information between re-renders (unlike regular variables,
                        which reset on every render). </p>
                    <p style={{fontSize: 20}}> >Changing it does not trigger a re-render (unlike state variables, which
                        trigger a re-render). </p>
                    <p style={{fontSize: 20}}> >The information is local to each copy of your component (unlike the
                        variables outside, which are shared). </p>
                    <p style={{fontSize: 20}}> Changing a ref does not trigger a re-render, so refs are not appropriate
                        for storing information you want to display on the screen. Use state for that instead. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header1">useState</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useState is a React Hook that lets you add a state variable to your
                        component. </p>

                    <div>
                        <CodeSnippet code={sampleCode60} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useState(initialState)</h3>
                    <p style={{fontSize: 20}}> Call useState at the top level of your component to declare a state
                        variable. </p>

                    <div>
                        <CodeSnippet code={sampleCode61} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> The convention is to name state variables like [something, setSomething]
                        using array destructuring. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >initialState: The value you want the state to be initially. It can be a
                        value of any type, but there is a special behavior for functions. This argument is ignored after
                        the initial render. </p>
                    <p style={{fontSize: 20}}> >If you pass a function as initialState, it will be treated as an
                        initializer function. It should be pure, should take no arguments, and should return a value of
                        any type. React will call your initializer function when initializing the component, and store
                        its return value as the initial state.</p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> useState returns an array with exactly two values: </p>
                    <p style={{fontSize: 20}}> 1.The current state. During the first render, it will match the
                        initialState you have passed. </p>
                    <p style={{fontSize: 20}}> 2.The set function that lets you update the state to a different value
                        and trigger a re-render. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >useState is a Hook, so you can only call it at the top level of your
                        component or your own Hooks. You can’t call it inside loops or conditions. If you need that,
                        extract a new component and move the state into it. </p>
                    <p style={{fontSize: 20}}> >In Strict Mode, React will call your initializer function twice in order
                        to help you find accidental impurities. This is development-only behavior and does not affect
                        production. If your initializer function is pure (as it should be), this should not affect the
                        behavior. The result from one of the calls will be ignored. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Adding state to a component </h4>
                    <p style={{fontSize: 20}}> Call useState at the top level of your component to declare one or more
                        state variables. </p>

                    <div>
                        <CodeSnippet code={sampleCode62} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> The convention is to name state variables like [something, setSomething]
                        using array destructuring. </p>
                    <p style={{fontSize: 20}}> useState returns an array with exactly two items: </p>
                    <p style={{fontSize: 20}}> 1.The current state of this state variable, initially set to the initial
                        state you provided. </p>
                    <p style={{fontSize: 20}}> 2.The set function that lets you change it to any other value in response
                        to interaction. </p>
                    <p style={{fontSize: 20}}> To update what’s on the screen, call the set function with some next
                        state: </p>

                    <div>
                        <CodeSnippet code={sampleCode63} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> React will store the next state, render your component again with the new
                        values, and update the UI. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header3">useSyncExternalStore</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useSyncExternalStore is a React Hook that lets you subscribe to an
                        external store. </p>

                    <div>
                        <CodeSnippet code={sampleCode64} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useSyncExternalStore(subscribe, getSnapshot,
                        getServerSnapshot?)</h3>
                    <p style={{fontSize: 20}}> Call useSyncExternalStore at the top level of your component to read a
                        value from an external data store. </p>

                    <div>
                        <CodeSnippet code={sampleCode65} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> It returns the snapshot of the data in the store. You need to pass two
                        functions as arguments: </p>
                    <p style={{fontSize: 20}}> 1.The subscribe function should subscribe to the store and return a
                        function that unsubscribes. </p>
                    <p style={{fontSize: 20}}> 2.The getSnapshot function should read a snapshot of the data from the
                        store. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >subscribe: A function that takes a single callback argument and
                        subscribes it to the store. When the store changes, it should invoke the provided callback. This
                        will cause the component to re-render. The subscribe function should return a function that
                        cleans up the subscription. </p>
                    <p style={{fontSize: 20}}> >getSnapshot: A function that returns a snapshot of the data in the store
                        that’s needed by the component. While the store has not changed, repeated calls to getSnapshot
                        must return the same value. If the store changes and the returned value is different (as
                        compared by Object.is), React re-renders the component.</p>
                    <p style={{fontSize: 20}}> >optional getServerSnapshot: A function that returns the initial snapshot
                        of the data in the store. It will be used only during server rendering and during hydration of
                        server-rendered content on the client. The server snapshot must be the same between the client
                        and the server, and is usually serialized and passed from the server to the client. If you omit
                        this argument, rendering the component on the server will throw an error.</p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> The current snapshot of the store which you can use in your rendering
                        logic. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Caveats </h4>
                    <p style={{fontSize: 20}}> >The store snapshot returned by getSnapshot must be immutable. If the
                        underlying store has mutable data, return a new immutable snapshot if the data has changed.
                        Otherwise, return a cached last snapshot. </p>
                    <p style={{fontSize: 20}}> >If a different subscribe function is passed during a re-render, React
                        will re-subscribe to the store using the newly passed subscribe function. You can prevent this
                        by declaring subscribe outside the component. </p>
                    <p style={{fontSize: 20}}> >If the store is mutated during a non-blocking Transition update, React
                        will fall back to performing that update as blocking. Specifically, for every Transition update,
                        React will call getSnapshot a second time just before applying changes to the DOM. If it returns
                        a different value than when it was called originally, React will restart the update from
                        scratch, this time applying it as a blocking update, to ensure that every component on screen is
                        reflecting the same version of the store. </p>
                    <p style={{fontSize: 20}}> >It’s not recommended to suspend a render based on a store value returned
                        by useSyncExternalStore. The reason is that mutations to the external store cannot be marked as
                        non-blocking Transition updates, so they will trigger the nearest Suspense fallback, replacing
                        already-rendered content on screen with a loading spinner, which typically makes a poor UX. </p>
                    <p style={{fontSize: 20}}> >For example, the following are discouraged: </p>

                    <div>
                        <CodeSnippet code={sampleCode66} language="javascript"/>
                    </div>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Subscribing to an external store </h4>
                    <p style={{fontSize: 20}}> Most of your React components will only read data from their props,
                        state, and context. However, sometimes a component needs to read some data from some store
                        outside of React that changes over time. This includes: </p>
                    <p style={{fontSize: 20}}> >Third-party state management libraries that hold state outside of
                        React. </p>
                    <p style={{fontSize: 20}}> >Browser APIs that expose a mutable value and events to subscribe to its
                        changes. </p>
                    <p style={{fontSize: 20}}> Call useSyncExternalStore at the top level of your component to read a
                        value from an external data store. </p>

                    <div>
                        <CodeSnippet code={sampleCode67} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> It returns the snapshot of the data in the store. You need to pass two
                        functions as arguments: </p>
                    <p style={{fontSize: 20}}> 1.The subscribe function should subscribe to the store and return a
                        function that unsubscribes. </p>
                    <p style={{fontSize: 20}}> 2.The getSnapshot function should read a snapshot of the data from the
                        store. </p>
                    <p style={{fontSize: 20}}> React will use these functions to keep your component subscribed to the
                        store and re-render it on changes. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header3">useTransition</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> useTransition is a React Hook that lets you update the state without
                        blocking the UI. </p>

                    <div>
                        <CodeSnippet code={sampleCode68} language="javascript"/>
                    </div>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Reference </h3>
                    <h3 style={{fontStyle: "bold", fontSize: 24}}>useTransition()</h3>
                    <p style={{fontSize: 20}}> Call useTransition at the top level of your component to mark some state
                        updates as Transitions. </p>

                    <div>
                        <CodeSnippet code={sampleCode69} language="javascript"/>
                    </div>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Parameters </h4>
                    <p style={{fontSize: 20}}> >useTransition does not take any parameters. </p>

                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Returns </h4>
                    <p style={{fontSize: 20}}> useTransition returns an array with exactly two items: </p>
                    <p style={{fontSize: 20}}> 1.The isPending flag that tells you whether there is a pending
                        Transition. </p>
                    <p style={{fontSize: 20}}> 2.The startTransition function that lets you mark a state update as a
                        Transition. </p>

                    <h3 style={{fontStyle: "bold", fontSize: 24}}>Usage </h3>
                    <h4 style={{fontStyle: "bold", fontSize: 24}}>Marking a state update as a non-blocking
                        Transition </h4>
                    <p style={{fontSize: 20}}> Call useTransition at the top level of your component to mark state
                        updates as non-blocking Transitions. </p>
                    <div>
                        <CodeSnippet code={sampleCode70} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> useTransition returns an array with exactly two items: </p>
                    <p style={{fontSize: 20}}> 1.The isPending flag that tells you whether there is a pending
                        Transition. </p>
                    <p style={{fontSize: 20}}> 2.The startTransition function that lets you mark a state update as a
                        Transition. </p>
                    <p style={{fontSize: 20}}> You can then mark a state update as a Transition like this: </p>

                    <div>
                        <CodeSnippet code={sampleCode71} language="javascript"/>
                    </div>

                    <p style={{fontSize: 20}}> Transitions let you keep the user interface updates responsive even on
                        slow devices. </p>
                    <p style={{fontSize: 20}}> With a Transition, your UI stays responsive in the middle of a re-render.
                        For example, if the user clicks a tab but then change their mind and click another tab, they can
                        do that without waiting for the first re-render to finish. </p>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}
