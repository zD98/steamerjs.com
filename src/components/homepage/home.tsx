import * as React from 'react'
import './home.less'

export default class Home extends React.Component {
    render() {
        const height = window.innerHeight - 46

        return (
            <section className="home" style={{height}}>
                <div className="wrap">
                <div className="home-pic">Steamer Picture</div>
                <div className="home-intro">
                    <h2>Steamer</h2>
                    <p>Introduction</p>
                </div>

                </div>
            </section>
        )
    }
}
