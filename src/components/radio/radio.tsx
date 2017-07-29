import * as React from 'react'

interface RadioProps {
    name: string
    value: string
    selected: boolean
    onClick: Function    
}

export default class Radio extends React.Component<RadioProps, {}> {
    
    constructor(props: RadioProps) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(): void {
        this.props.onClick(this.props.value)
    }
    render() {
        let selected = this.props.selected ? 'selected' : ''
        let classes = `radio ${selected}`
        return (
            <div className={classes} onClick={this.handleClick}>
                {this.props.name}
            </div>
        )
    }
}
