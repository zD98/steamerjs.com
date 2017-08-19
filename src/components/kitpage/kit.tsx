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
            project: 'project',
            frame: 'react',
            command: 'npm install steamer'
        }
        this.handleFrameChange = this.handleFrameChange.bind(this)
        this.handleProjectChange = this.handleProjectChange.bind(this)
    }
    handleProjectChange(value: string) {
        console.log(value)
        this.setState({ project: value })
    }

    handleFrameChange(value: string) {
        this.setState({
            frame: value
        })
    }
    render() {
        let frame = this.state.frame
        let way = `steamer-${frame}` + ( this.state.project === 'project' ? '' : `-component` ) 
        let command = `npm i -g ${way}`

        return (
            <section className="kit">
                <h2>脚手架指引</h2>
                <p className="group-title">开发选择</p>
                <RadioGroup
                    options={projects}
                    value="project"
                    onChange={this.handleProjectChange}
                />
                <p className="group-title">框架选择</p>
                <RadioGroup
                    options={frames}
                    value="react"
                    onChange={this.handleFrameChange}
                />
                <div className="kit-command">
                    <span>{command}</span>
                </div>
            </section>
        )
    }
}
