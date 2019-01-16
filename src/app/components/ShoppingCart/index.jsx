import React, { Component } from 'react';
import { Context as AppContext, _f } from '@honzachalupa/helpers';
import './style';
import ItemCart from 'Components/ItemCart';
export default class ShoppingCart extends Component {
    static contextType = AppContext;

    intersectionCartList(ordered, items) {
        return ordered.map(order => ({
            ...items.find(item => item.id === order.id),
            ...order
        }));
    }


    render() {
        const { items, ordered } = this.context;
        const cart = this.intersectionCartList(ordered, items);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return (
            <div>
                <table className="shopping">
                    <tbody>
                        {
                            cart.map(item => (
                                <ItemCart {...item} key={item.id} />
                            ))
                        }
                    </tbody>
                </table>
                {
                    cart.length > 0 && (
                        <p className="total">
                            Celkem:
                            {' '}
                            {_f.formatCurrency(cart.map(item => item.amount * item.price).reduce(reducer))}
                        </p>
                    )
                }
            </div>
        );
    }
}
