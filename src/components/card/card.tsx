import * as React from 'react'

import './card.less'

interface CardProps {
    name: string
    desc: string
    docLink: string
    link: string
}

export default class Card extends React.Component<CardProps, {}> {
    render() {
        const { name, desc, docLink, link } = this.props

        return (
            <div className="card">
                <a href={link} target="blank">
                    <div className="name">
                        {name}
                    </div>
                    <p className="desc">
                        {desc}
                    </p>
                </a>
                <div className="meta">
                    <div className="command">命令</div>
                    <div className="doc">
                        <a href={docLink} target="blank">
                            文档
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
