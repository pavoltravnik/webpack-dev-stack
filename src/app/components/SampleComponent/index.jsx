import React, { Component, Fragment } from 'react';
import AppContext from 'Helpers/context';
import './style';

import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';


export default class SampleComponent extends Component {
    static contextType = AppContext;

    handleValueUpdate(newValue) {
        const { _updateContextProperty } = this.context;

        _updateContextProperty('testValue', newValue);
    }

    render() {
        const { testValue } = this.context;

        return (
            <div>
                <Fragment>
                    <p>{testValue}</p>
                    <Button type="button" onClick={() => this.handleValueUpdate(Math.random())}>Update AppContext</Button>

                    <Row>
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Fragment>
            </div>
        );
    }
}
