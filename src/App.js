import React, { Component } from 'react';
import './App.less';
import { Button } from 'antd';

export default class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <div className="demo">
                <Button type="primary">Button</Button>
            </div>
        );
    }
}
