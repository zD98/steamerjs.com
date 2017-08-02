import * as React from 'react'
import Card from '../card'

import './platform.less'

interface CardProps {
    name: string
    desc: string
    link: string
    docLink: string
}

const platforms: Array<CardProps> = [
    {
        name: 'JB',
        desc: '测试部署系统',
        link: '//jb.oa.com/',
        docLink: '//steamer.oa.com/docs/docs/Steamer-Plugin-JB.html'
    },
    {
        name: 'Ak',
        desc: '离线包部署平台',
        link: '//ak.oa.com/',
        docLink: '//steamer.oa.com/docs/docs/Steamer-Plugin-AK.html'
    },
    {
        name: 'AlloyStore',
        desc: '组件平台',
        link: '//alloystore.oa.com/',
        docLink: '//steamer.oa.com/docs/docs/Steamer-Plugin-Alloystore.html'
    }
]
interface PlatState {
    command: string
}
export default class Plat extends React.Component<{}, PlatState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            command: ''
        }
        this.renderCard = this.renderCard.bind(this)
    }

    renderCard(plat: CardProps, index: number) {
        return <Card key={index} {...plat} />
    }
    render() {
        return (
            <div className="platform">
                <h2>开发平台</h2>
                <div>
                    <span>
                        {this.state.command}
                    </span>
                </div>
                <div className="cards">
                    {platforms.map(this.renderCard)}
                </div>
            </div>
        )
    }
}
