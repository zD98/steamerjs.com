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
                    {/* <div className="meta-btn command">
                        <a href=":;" >
                            命令
                        </a>
                    </div> */}
                    <div className="meta-btn doc">
                        <a href={docLink} target="blank">
                            文档
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
