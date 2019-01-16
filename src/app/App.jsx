import '@babel/polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { autobind } from 'core-decorators';
import config from 'app-config';
import { Context as AppContext, _a } from '@honzachalupa/helpers';
import './App.scss';
import Page_Home from 'Pages/Home';
import Page_NumPad from 'Pages/NumPad';
import Page_NotFound from 'Pages/NotFound';

class App extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            ordered: [],
            test: 1,
            text: 'test',
            isLoaded: false,
            _updateContextProperty: this.updateContextProperty,
            _addToCart: this.addToCart,
            _removeItem: this.removeItem
        };

        if (config.caching) {
            _a.initServiceWorker();
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    /**
     * Performs an update of the global (App-level) context. Updates only selected item.
     *
     * @param {any} key
     * @param {any} value
     * @memberof App
     */
    @autobind
    updateContextProperty(key, value) {
        this.setState({
            [key]: value
        });
    }

    @autobind
    addToCart(id, amount) {
        this.setState(prevState => ({
            ordered: [...prevState.ordered, { id, amount }]
        }));
    }

    @autobind
    removeItem(id) {
        this.setState(prevState => ({
            ordered: prevState.ordered.filter(item => item.id !== id)
        }));
    }

    render() {
        return (
            <div className="container">
                <AppContext.Provider value={this.state}>
                    <Router>
                        <Switch>
                            <Route component={Page_Home} path="/" exact />
                            <Route path="/numpad/:id" exact render={params => <Page_NumPad id={params.match.params.id} />} />
                            <Route component={Page_NotFound} exact />
                        </Switch>
                    </Router>
                </AppContext.Provider>
            </div>
        );
    }
}

render(<App />, document.querySelector('#app'));
