import * as React from 'react'
import './kit.less'

import { Radio, Group as RadioGroup } from '../radio'

const projects = [
    { name: '项目', value: 'project' },
    { name: '组件', value: 'component' }
]
const frames = [
    { name: 'React', value: 'react' },
    { name: 'Vue', value: 'vue' },
    { name: 'Simple', value: 'simple' }
]
interface KitState {
    project: string
    frame: string
    command: string
}
export default class Kit extends React.Component<{}, KitState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            project: '',
            frame: '',
            command: 'npm install steamer'
        }
        this.handleFrameChange = this.handleFrameChange.bind(this)
        this.handleProjectChange = this.handleProjectChange.bind(this)
    }
    handleProjectChange(value: string) {
        this.setState({
            project: value
        })
    }

    handleFrameChange(value: string) {
        this.setState({
            frame: value
        })
    }
    render() {
        return (
            <section className="kit">
                <h2>Steamer Command Introduction</h2>
                <RadioGroup
                    options={projects}
                    onChange={this.handleFrameChange}
                />
                <RadioGroup
                    options={frames}
                    onChange={this.handleFrameChange}
                />
                <div className="kit-command">
                    <span>{this.state.command}</span>
                </div>
            </section>
        )
    }
}
