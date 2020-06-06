import React from 'react';
import { Breadcrumb, Divider,Button } from 'antd';
import 'antd/dist/antd.css';
import "../css/index.css";

export default class header extends React.Component {
    render() {
        return (
            <div className="headerstyle">
                <img src='./src/img/logo.png'></img>
                <Breadcrumb separator={false} className="head">
                    <Breadcrumb.Item>
                        <a href="">云餐饮系统</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">收银硬件</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">商户案例</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">新闻博客</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">技术支持</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">商户合作</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><Button type="link">软件下载</Button></Breadcrumb.Item>
                    <Breadcrumb.Item><Button ghost>商户入口</Button></Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}