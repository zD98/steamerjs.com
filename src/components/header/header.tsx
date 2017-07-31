import * as React from 'react'
import './header.less'

export default class Header extends React.Component {

    render() {

        return (
        <header className="header">
            <a href="/" className="logo" title="Steamer前端开发体系">Steamer前端开发体系</a>
            <ul className="header-nav">
                <li className="nav-item"><a href="/" target="blank">文档</a></li>
                <li className="nav-item"><a href="/">情景</a></li>
                <li className="nav-item"><a href="/" target="blank">Github</a></li>
            </ul>
        </header>)
    }
}