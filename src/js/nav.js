import React from 'react';
import "../css/index.css";
import { Button, Radio } from 'antd';
export default class nav extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render() {
        return (
            <nav className="navstyle">
                <img src="./src/img/solution-bg.jpg"></img>
                <div>
                    <h1>累计签约商户超过10万家</h1>
                    <p>优秀稳定的餐饮系统，选择美食云专业餐饮管理系统！</p>
                     <Button type="primary">软件下载</Button>
                </div>

            </nav>
        )
    }
}