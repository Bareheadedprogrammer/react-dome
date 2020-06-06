import React from 'react';
import Anli from "./anli";
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
var headerstyle = {
    height: 110,
    background: "#ff0"
}
export default class header extends React.Component {
    render() {
        return (
            <div className="foot">
                <div className="footerleft">
                    <ul>
                        <h1>产品</h1>
                        <li>产品介绍</li>
                    </ul>
                    <ul>
                        <h1>服务</h1>
                        <li>帮助中心</li>
                    </ul>
                    <ul>
                        <h1>公司</h1>
                        <li>关于我们</li>
                        <li>媒体报道</li>
                        <li>公司动态</li>
                        <li>联系我们</li>
                    </ul>
                    <ul>
                        <h1>更多</h1>
                        <li>商户合作</li>
                        <li>网站地址</li>
                    </ul>
                    <ul className="footerright">
                        <h1>联系客户顾问</h1>
                        <p>400 813 5551</p>
                    </ul>
                </div>


            </div>
        )
    }
}