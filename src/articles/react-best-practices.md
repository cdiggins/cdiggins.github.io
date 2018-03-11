# React Best practices

I have summarized and compiled a list of [React.JS](https://reactjs.org/) best practices from various sources across the internet.

## From the React docs 

* https://reactjs.org/docs/components-and-props.html 
    * props must be readonly

* https://reactjs.org/docs/state-and-lifecycle.html
    * free up resources taken by resource when they are destroyed.
    * do not modify state directly - use a function
    * neither parent nor child components should know if a certain component is stateful or stateless, and whether  a function or a class.

* https://reactjs.org/docs/handling-events.html
    * bind in the constructor to avoid performance problems of re-rendering

* https://reactjs.org/docs/conditional-rendering.html
    * for a component to hide itself return null from render

* https://reactjs.org/docs/lists-and-keys.html
    * `key` is a required string attribute when creating lists of elements
    * elements generated inside a `map()` call need key
    * keys within arrays should be unique among their siblings

* https://reactjs.org/docs/lifting-state-up.html 
    * when several components reflect the same changing data lift shared state up to a common ancestor

* https://reactjs.org/docs/optimizing-performance.html
    * instead of writing `shouldComponentUpdate()` inherit from `React.PureComponent` where possible
    * avoid in-place mutation by using `Object.assign`, spread operator (`...`), and non-mutating operations
    * you can use `Immutable.js`, `seamless-immutable`, or `immutability-helper`.

* https://reactjs.org/docs/reconciliation.html 
    * keys should be stable, predictable, and unique. 

* https://reactjs.org/docs/context.html
    * majority of applications do not need to use context.
    * if you want your application to be stable, don’t use context.
    * if you aren’t familiar with state management libraries like Redux or MobX, don’t use context. 

* https://reactjs.org/docs/refs-and-the-dom.html
    * typical React dataflow, props are the only way that parent components interact with their children. 
    * Refs are for a few cases to imperatively modify a child outside of the typical dataflow
    * when to use refs:
        * managing focus, text selection, or media playback.
        * triggering imperative animations.
        * integrating with third-party DOM libraries.    

* https://reactjs.org/docs/higher-order-components.html 
    * use HOCs for cross-cutting concerns
    * a HOC composes the original component by wrapping it in a container component. 
    * don’t mutate the original component. use composition.
    * pass unrelated props through to the wrapped component
    * wrap the display name for easy debugging
    * don't use HOCs inside the render method, create as variables outside
    * apply HOCs outside the component definition so that the resulting component is created only once. 
    * be aware that refs aren't passed through

* https://reactjs.org/docs/render-props.html
    * render props are an alternative to HOC for cross-cutting concerns
    * render props enabling shared state or behavior between components 
    * higher-order components can be implemented with a render prop
    * prefer instance methods to avoid triggering extra redraws

* https://reactjs.org/docs/faq-functions.html
    * you can limit the rate at which callback is executed via throttling and debouncing

# Presentational and Container Components

Separate components into [presentational or container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

* Presentation components
    * concerned with how things look
    * allow containment via this.props.children
    * often have styles
    * have no dependencies on rest of approach
    * don't specify how data is loaded or mutated
    * Receive data and callbacks exclusively via props.
    * Rarely have their own state (when they do, it’s UI state rather than data).

* Container components 
    * concerned with how things work
    * usually don’t have any DOM markup of their own except for maybe some wrapping divs
    * provide data and behavior to presentational or other container components.
    * are often stateful 

*  Because functional components are easier to understand, use them unless you need state, lifecycle hooks, or performance optimizations   
        
# Best Practices From Other Sources 

* https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8
    * prefer functional components over class based
    * prefer state initialization in class member variable declaration over constructor
    * pass functions to `setState()`
    * avoid passing closures to sub-components
    * use named functions to facilitate debugging
    * use short circuit evaluation when rendering on only one side of a condition
    * minimize nested ternary conditional expressions

* https://medium.com/prdxn/react-best-practices-and-checklist-13eaf3317d6877
    * breaking components up into containers and presentation.
    * always define a defaultProps
    * omit value when it is explicitly true

* https://mobx.js.org/best/react-performance.html
    * use many small components
    * render lists in dedicated components
    * don't use array indexes as keys
    * bind functions early

* https://getstream.io/blog/react-redux-best-practices-gotchas/
    * normalize relationships in entity tree
    * log errors with Raven

* http://nalwaya.com/javascript/2016/05/02/react-js-best-practices.html
    * avoid nested state 
    * keep things immutable
    * centralize state
    * thinner reducers 
    * put logic in action creators
    * consider using Saga
    * use stateless components as much as possible
    * import the functions you need, not entire modules
    * bind functions in constructor
    * avoid using [] or {} as property, as shallow compare fails

* http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/
    * keep state as minimal as possible
    * respect the single source of truth when managing state

* https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
    * prefer PureComponent over Component, but never mutate your object
    * don’t derive data in the render method, instead cache it in the state
    * if you’re using Redux, consider using reselect to create “selectors” to compose and cache derived data.

* https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
    * Don't use index as a key
    * recommend 'shortid'
