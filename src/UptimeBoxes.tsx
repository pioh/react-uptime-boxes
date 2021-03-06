import * as React from 'react'
import {observable, action, ObservableMap} from 'mobx'
import {observer} from 'mobx-react'

import {ServerUptime} from './ServerUptime'

type IServers = ObservableMap<ObservableMap<boolean>>

let MAX:any = location.search.match(/max=(\d+)/)
MAX = MAX && MAX[1] || 364

@observer
class UptimeBoxes extends React.Component {
  @observable servers: IServers = this.generateServers()
  animationFrameRequestId = 0
  @action generateServers (servers?) {
    servers = servers || observable.map()
    this.generateServer(servers, "Stefan's Server")
    this.generateServer(servers, "Godfrey's Server")
    this.generateServer(servers, "Yehuda's Server")
    return servers
  }
  componentDidMount () {
    this.requestFrame()
  }
  requestFrame = () => {
    this.animationFrameRequestId = requestAnimationFrame(this.onFrame)
  }
  onFrame = () => {
    this.generateServers(this.servers)
    this.requestFrame()
  }
  componentWillUnmount () {
    cancelAnimationFrame(this.animationFrameRequestId)
  }
  generateServer (servers, name) {
    let days = servers.get(name)
    if (!days) {
      days = observable.map()
      servers.set(name, days)
    }
    for (let i=0; i<=MAX; i++) {
      let up = Math.random() > 0.2;
      days.set(i, up)
    }
  }

  render () {
    return (
      <div>
        {this.servers.entries().map(([name, days]) => (
          <ServerUptime key={name} name={name} days={days} />
        ))}
      </div>
    )
  }
}

export {UptimeBoxes}
