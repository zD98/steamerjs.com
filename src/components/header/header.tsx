import * as React from 'react'
import './header.less'

export default class Header extends React.Component {

    render() {

        return (
        <header>
            <span>Steamer前端开发体系</span>
            <ul>
                <li>文档</li>
                <li>情景</li>
                <li>Github</li>
            </ul>
        </header>)
    }
}