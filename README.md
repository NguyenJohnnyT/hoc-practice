# Higher order components

Biggest blocker is generic typing on incoming async data and rendering it in a wrapped component

[Is this necessary with react hooks?](https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb)

[Also found out that shouldn't render HOC in render methods / returns for functional components](https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method)

Current search filter implementation with a todo API works fine, but is making a generic HOC type without turning into `any` types worth the study?
