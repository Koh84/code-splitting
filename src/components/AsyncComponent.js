import React, { Component } from 'react';

// Higher order component.
// Component that returns component.

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            //const page = await importComponent();
            //console.log('page :', page.default);
            
            // const component = await importComponent();
            // this.setState({
            //     component: component.default
            // })

            const { default: component } = await importComponent();
            this.setState({
                component: component
            })
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component { ...this.props} /> : null;
        }
    }

    return AsyncComponent;
}
