import * as React from 'react'
import Header from './components/header'
import Home from './components/homepage'
import Kit from './components/kitpage'
import Plat from './components/platpage'
import Footer from './components/footer'

export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Kit />
                <Plat />
                <Footer />
            </div>
        )
    }
}
