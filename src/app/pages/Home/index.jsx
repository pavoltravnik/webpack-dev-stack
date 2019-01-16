import React, { Component } from 'react';
import Layout_Main from 'Layouts/Main';
import ItemsList from 'Components/ItemsList';
import ShoppingCart from 'Components/ShoppingCart';

export default class Page_Home extends Component {
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

        return (
            <section>
                <Layout_Main page={page}>
                    <ItemsList />
                    <ShoppingCart />
                </Layout_Main>
            </section>
        );
    }
}
