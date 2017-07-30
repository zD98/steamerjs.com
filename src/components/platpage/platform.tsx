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
        link: '',
        docLink: ''
    },
    {
        name: 'Ak',
        desc: '测试部署系统',
        link: '',
        docLink: ''
    },
    {
        name: 'Linkstar',
        desc: '测试部署系统',
        link: '',
        docLink: ''
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
                <div className="cards">
                    {platforms.map(this.renderCard)}
                </div>
                <div>
                    <span>
                        {this.state.command}
                    </span>
                </div>
            </div>
        )
    }
}
