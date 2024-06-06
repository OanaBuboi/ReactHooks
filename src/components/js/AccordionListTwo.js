import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeSnippet from "./CodeSnipet";


export function AccordionListTwo() {
    const sampleCode = `function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
  `;

    const sampleCode2 = `function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
  `;
    const sampleCode3 = `function StatusBar() {
  const isOnline = useOnlineStatus();
  // ...
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  // ...
}
`;
    const sampleCode4 = `function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // ...
  }, []);
  // ...
}

function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // ...
  }, []);
  // ...
}
`;
    const sampleCode5 = `function ShippingForm({ country }) {
  const [cities, setCities] = useState(null);
  // This Effect fetches cities for a country
  useEffect(() => {
    let ignore = false;
    fetch(\'/api/cities?country='$'{country}\')
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setCities(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [country]);

  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);
  // This Effect fetches areas for the selected city
  useEffect(() => {
    if (city) {
      let ignore = false;
      fetch(\'/api/areas?city='$'{city}\')
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setAreas(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [city]);

  // ...
`;
    const sampleCode6 = `function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
}
`;
    const sampleCode7 = `function ShippingForm({ country }) {
  const cities = useData(\`/api/cities?country='$'{country}\`);
  const [city, setCity] = useState(null);
  const areas = useData(city ? \`/api/areas?city='$'{city}\` : null);
  // ...
`;
    return (
        <div style={{margin: '0 300px'}}>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2 className="header4">Reusing Logic with Custom Hooks</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> React comes with several built-in Hooks like useState, useContext, and
                        useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for
                        example, to fetch data, to keep track of whether the user is online, or to connect to a chat
                        room. You might not find these Hooks in React, but you can create your own Hooks for your
                        application’s needs.</p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h2 className="header4">Custom Hooks: Sharing logic between components</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> Imagine you’re developing an app that heavily relies on the network (as
                        most apps do). You want to warn the user if their network connection has accidentally gone off
                        while they were using your app. How would you go about it? It seems like you’ll need two things
                        in your component: </p>

                    <p style={{fontSize: 20}}> 1.A piece of state that tracks whether the network is online. </p>

                    <p style={{fontSize: 20}}> 2.An Effect that subscribes to the global online and offline events, and
                        updates that state. </p>
                    <p style={{fontSize: 20}}> This will keep your component synchronized with the network status. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header4">Extracting your own custom Hook from a component </h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> Imagine for a moment that, similar to useState and useEffect, there was a
                        built-in useOnlineStatus Hook. Then both of these components could be simplified and you could
                        remove the duplication between them: </p>
                    <div>
                        <CodeSnippet code={sampleCode} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Although there is no such built-in Hook, you can write it yourself.
                        Declare a function called useOnlineStatus and move all the duplicated code into it from the
                        components you wrote earlier: </p>
                    <div>
                        <CodeSnippet code={sampleCode2} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> At the end of the function, return isOnline. </p>
                    <p style={{fontSize: 20}}> Verify that switching the network on and off updates both
                        components. </p>
                    <p style={{fontSize: 20}}> Now your components don’t have as much repetitive logic. More
                        importantly, the code inside them describes what they want to do (use the online status!) rather
                        than how to do it (by subscribing to the browser events). </p>
                    <p style={{fontSize: 20}}> When you extract logic into custom Hooks, you can hide the gnarly details
                        of how you deal with some external system or a browser API. The code of your components
                        expresses your intent, not the implementation. </p>


                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header4">Hook names always start with use</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> React applications are built from components. Components are built from
                        Hooks, whether built-in or custom. You’ll likely often use custom Hooks created by others, but
                        occasionally you might write one yourself! </p>
                    <p style={{fontSize: 20}}> You must follow these naming conventions: </p>
                    <p style={{fontSize: 20}}> 1.React component names must start with a capital letter, like StatusBar
                        and SaveButton. React components also need to return something that React knows how to display,
                        like a piece of JSX. </p>
                    <p style={{fontSize: 20}}> 2.Hook names must start with use followed by a capital letter, like
                        useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return
                        arbitrary values. </p>

                    <p style={{fontSize: 20}}> This convention guarantees that you can always look at a component and
                        know where its state, Effects, and other React features might “hide”. For example, if you see a
                        getColor() function call inside your component, you can be sure that it can’t possibly contain
                        React state inside because its name doesn’t start with use. However, a function call like
                        useOnlineStatus() will most likely contain calls to other Hooks inside! </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header4">Custom Hooks let you share stateful logic, not state itself </h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> In the earlier example, when you turned the network on and off, both
                        components updated together. However, it’s wrong to think that a single isOnline state variable
                        is shared between them. Look at this code: </p>
                    <div>
                        <CodeSnippet code={sampleCode3} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> It works the same way as before you extracted the duplication: </p>
                    <div>
                        <CodeSnippet code={sampleCode4} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> These are two completely independent state variables and Effects! They
                        happened to have the same value at the same time because you synchronized them with the same
                        external value (whether the network is on). </p>
                    <p style={{fontSize: 20}}> Custom Hooks let you share stateful logic but not state itself. Each call
                        to a Hook is completely independent from every other call to the same Hook. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header4">When to use custom Hooks</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> You don’t need to extract a custom Hook for every little duplicated bit
                        of code. Some duplication is fine. For example, extracting a useFormInput Hook to wrap a single
                        useState call like earlier is probably unnecessary. </p>
                    <p style={{fontSize: 20}}> However, whenever you write an Effect, consider whether it would be
                        clearer to also wrap it in a custom Hook. You shouldn’t need Effects very often, so if you’re
                        writing one, it means that you need to “step outside React” to synchronize with some external
                        system or to do something that React doesn’t have a built-in API for. Wrapping it into a custom
                        Hook lets you precisely communicate your intent and how the data flows through it. </p>
                    <p style={{fontSize: 20}}> For example, consider a ShippingForm component that displays two
                        dropdowns: one shows the list of cities, and another shows the list of areas in the selected
                        city. You might start with some code that looks like this: </p>

                    <div>
                        <CodeSnippet code={sampleCode5} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Although this code is quite repetitive, it’s correct to keep these
                        Effects separate from each other. They synchronize two different things, so you shouldn’t merge
                        them into one Effect. Instead, you can simplify the ShippingForm component above by extracting
                        the common logic between them into your own useData Hook: </p>
                    <div>
                        <CodeSnippet code={sampleCode6} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Now you can replace both Effects in the ShippingForm components with
                        calls to useData: </p>
                    <div>
                        <CodeSnippet code={sampleCode7} language="javascript"/>
                    </div>
                    <p style={{fontSize: 20}}> Extracting a custom Hook makes the data flow explicit. You feed the url
                        in and you get the data out. By “hiding” your Effect inside useData, you also prevent someone
                        working on the ShippingForm component from adding unnecessary dependencies to it. With time,
                        most of your app’s Effects will be in custom Hooks. </p>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#b58fc9"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="iconita2"/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2 className="header4">Recap</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> >Custom Hooks let you share logic between components. </p>
                    <p style={{fontSize: 20}}> >Custom Hooks must be named starting with use followed by a capital
                        letter. </p>
                    <p style={{fontSize: 20}}> >Custom Hooks only share stateful logic, not state itself. </p>
                    <p style={{fontSize: 20}}> >You can pass reactive values from one Hook to another, and they stay
                        up-to-date. </p>
                    <p style={{fontSize: 20}}> >All Hooks re-run every time your component re-renders. </p>
                    <p style={{fontSize: 20}}> >The code of your custom Hooks should be pure, like your component’s
                        code. </p>
                    <p style={{fontSize: 20}}> >Wrap event handlers received by custom Hooks into Effect Events. </p>
                    <p style={{fontSize: 20}}> >Don’t create custom Hooks like useMount. Keep their purpose
                        specific. </p>
                    <p style={{fontSize: 20}}> >It’s up to you how and where to choose the boundaries of your code. </p>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}
