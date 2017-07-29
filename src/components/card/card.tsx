import * as React from 'react'

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
            <div>
                <a href={link} target="blank">
                    <div>
                        {name}
                    </div>
                    <p>
                        {desc}
                    </p>
                </a>
                <div>
                    <div>命令</div>
                    <div>
                        <a href={docLink} target="blank">
                            文档
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
