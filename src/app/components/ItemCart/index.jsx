import React, { Component } from 'react';
import { Context as AppContext, _f } from '@honzachalupa/helpers';
import './style';

export default class ItemCart extends Component {
    static contextType = AppContext;

    render() {
        const { title, amount, price, id } = this.props;
        const { _removeItem } = this.context;

        return (
            <tr>
                <td>{title}</td>
                <td>{_f.formatCurrency(price)}</td>
                <td>{_f.formatCurrency(amount)}</td>
                <td>{_f.formatCurrency(amount * price)}</td>
                <td><button type="button" key="0" className="button" onClick={() => _removeItem(id)}>X</button></td>
            </tr>


        );
    }
}
