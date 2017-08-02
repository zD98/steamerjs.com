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
                <h2>脚手架指引</h2>
                <p className="group-title">开发选择</p>
                <RadioGroup
                    options={projects}
                    value="project"
                    onChange={this.handleFrameChange}
                />
                <p className="group-title">框架选择</p>
                <RadioGroup
                    options={frames}
                    value="react"
                    onChange={this.handleFrameChange}
                />
                <div className="kit-command">
                    <span>{this.state.command}</span>
                </div>
            </section>
        )
    }
}
