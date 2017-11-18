
import * as React from 'react'
import {ObservableMap, computed} from 'mobx'
import {observer} from 'mobx-react'

import * as s from './app.css'

interface IServerUptimeDayProps {
  day: string,
  days: ObservableMap<boolean>,
}

@observer
class ServerUptimeDay extends React.Component<IServerUptimeDayProps> {
  @computed get up () {
    return this.props.days.get(this.props.day)
  }
  styleUp = {backgroundColor: "#8cc665"}
  styleDown = {backgroundColor: "#ccc"}

  @computed get style () {
    return this.up ? this.styleUp : this.styleDown
  }
  @computed get title () {
    return this.up ? 'Servers operational!' : 'Red alert!'
  }

  render () {
    return (
      <div className={s.uptimeDay}>
        <span className={s.uptimeDayStatus} style={this.style} />
        <span className={s.hover}>{this.props.day}: {this.title}</span>
      </div>
    )
  }
}
export {ServerUptimeDay}
