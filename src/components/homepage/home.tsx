import * as React from 'react'
import './home.less'

export default class Home extends React.Component {
    render() {
        // const height = window.innerHeight - 46
        const height = 640
        
        return (
            <section className="home" style={{ height }}>
                <div className="wrap">
                    <div className="home-pic" />
                    <div className="home-intro">
                        <h2><span>Steamerjs</span> 帮你打造高效的前端技术体系</h2>
                        <p>用命令行帮你打通系统, 用脚手架帮你整合功能</p>
                    </div>
                </div>
            </section>
        )

    }
}
