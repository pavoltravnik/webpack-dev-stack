import React, { Component } from 'react';
import { Context as AppContext } from '@honzachalupa/helpers';
import { autobind } from 'core-decorators';
import './style';
import { Link } from 'react-router-dom';

export default class NumPad extends Component {
    static contextType = AppContext;

    state = {
        id: 0,
        amount: 0
    };

    componentDidMount() {
        const { id } = this.props;
        this.setState({ id });
    }

    @autobind
    handleChange(event) {
        this.setState({ amount: event.target.value });
    }

    @autobind
    handleNumpad(amount, addition) {
        amount = Number(`${amount}${addition}`);
        this.setState({ amount });
    }

    render() {
        const { _addToCart } = this.context;
        const { id, amount } = this.state;
        const { item } = this.props;
        const NumPadTable = () => {
            const items = [];
            for (let i = 1; i < 10; i += 1) {
                items.push(<div key={i} className="button" onClick={() => this.handleNumpad(amount, i)}>{i}</div>);
            }
            items.push(<div key="0" className="button" onClick={() => this.handleNumpad(amount, 0)}>0</div>);
            return items;
        };

        return (
            <div>
                <p><b>{item.title}</b></p>
                <input type="number" value={amount} className="input-num" onChange={this.handleChange} />
                <div className="numpad">
                    <NumPadTable />
                    <Link to="/" key="add" className="button" onClick={() => _addToCart(id, amount)}>Add to cart</Link>
                </div>
            </div>
        );
    }
}
