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

        this.setState({
            id
        });
    }

    @autobind
    handleChange(e) {
        const { value: amount } = e.target;

        this.setState({
            amount
        });
    }

    @autobind
    handleNumpad(addition) {
        this.setState(prevState => ({
            amount: Number(`${prevState.amount}${addition}`)
        }));
    }

    // To-do: Chybí možnost mazání znaků bez fyzické klávesnice

    render() {
        const { _addToCart } = this.context;
        const { id, amount } = this.state;
        const { item } = this.props;

        const buttonNumPad = char => {
            return <div key={char} className="button" onClick={() => this.handleNumpad(char)}>{char}</div>;
        };

        const NumPadTable = () => {
            const items = [];
            for (let i = 1; i < 10; i += 1) {
                items.push(
                    buttonNumPad(i) // To-do: Vytvoř pro tohle funkci, která Ti toto HTML vrátí + to samé níže
                );
            }

            items.push(
                buttonNumPad(0) // To-do: ...zde
            );

            return items;
        };

        return (
            <div>
                <p>
                    {item.title}
                </p>

                <input type="number" value={amount} className="input-num" onChange={this.handleChange} />

                <div className="numpad">
                    <NumPadTable />

                    <Link to="/" key="add" className="button" onClick={() => _addToCart(id, amount)}>Add to cart</Link>
                </div>
            </div>
        );
    }
}
