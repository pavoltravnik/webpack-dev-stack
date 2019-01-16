import React, { Component } from 'react';
import Layout_Main from 'Layouts/Main';
import NumPad from 'Components/NumPad';
import { Context as AppContext, _d } from '@honzachalupa/helpers';


export default class Page_NumPad extends Component {
    static contextType = AppContext;

    constructor() {
        super();

        this.state = {
            page: {
                label: 'Welcome'
            }
        };
    }

    render() {
        const { page } = this.state;
        const { items } = this.context;
        let { id } = this.props;
        id = Number(id);

        const item = _d.isValid(items) ? items.find(item => item.id === id) : null;

        return (
            <section>
                <Layout_Main page={page}>
                    { _d.isValid(item) ? <NumPad item={item} id={id} /> : <p>Invalid ID</p> }
                </Layout_Main>
            </section>
        );
    }
}
