import * as React from 'react'
import Radio from './radio'

interface RadioProp {
    name: string
    value: string
}

interface GroupProps {
    options: Array<RadioProp>
    onChange: Function
}

interface GroupState {
    curValue: string
}

export default class Group extends React.Component<GroupProps, GroupState> {
    constructor(props: GroupProps) {
        super(props)
        this.state = {
            curValue: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.renderRadios = this.renderRadios.bind(this)
    }

    handleClick(value: string) {
        this.props.onChange(value)
        this.setState({
            curValue: value
        })
    }
    renderRadios(option: RadioProp, index: number) {

        // 不严谨
        const selected = option.value === this.state.curValue
        return (
            <Radio
                key={index}
                selected={selected}
                onClick={this.handleClick}
                {...option}
            />
        )
    }
    render() {
        const { options, onChange } = this.props
        return (
            <div className="radio-group">
                {options.map(this.renderRadios)}
            </div>
        )
    }
}
