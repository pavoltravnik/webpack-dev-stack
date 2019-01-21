import React, { Component } from 'react';
import { Context as AppContext } from '@honzachalupa/helpers';
import './style';
import Item from 'Components/Item';

export default class ItemsList extends Component {
    static contextType = AppContext;

    render() {
        const { items } = this.context;

        return (
            <div className="flex-containers">
                {items.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        );
    }
}
