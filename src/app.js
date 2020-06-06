import React from 'react';
import ReactDom from 'react-dom';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import "./css/index.css";
import Header from './js/header';
import Nav from './js/nav';
import Content from './js/content';
import Footer from './js/footer';
// es6的方法创建的有状态的组件
class Hellow extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <Content></Content>
                <Footer>
                    <BrowserRouter>
                        <Switch>
                            <NavLink to="/">产品</NavLink>
                        </Switch>
                </BrowserRouter>
                </Footer>
            </div>
        )
    }

}
ReactDom.render(
    <Hellow />,
    document.getElementById("d1")
)