import React, { Component } from 'react';
import { Context as AppContext, _f } from '@honzachalupa/helpers';
import './style';
import { Link } from 'react-router-dom';


export default class Item extends Component {
    static contextType = AppContext;

    render() {
        const { id, title, price } = this.props;
        const { ordered } = this.context;

        const isAddVisible = ordered.find(item => item.id === id);

        return (
            <div className="flex-container">
                <p>{title}</p>
                <p>{_f.formatCurrency(price)}</p>

                {!isAddVisible && (
                    <Link to={`/numpad/${id}`} type="button" className="button-link" color="primary" size="sm">Add</Link>
                )}
            </div>
        );
    }
}
