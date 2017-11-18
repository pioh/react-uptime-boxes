
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
  @computed get className () {
    return s.uptimeDayStatus +' ' + (this.up ? s.dayUp : s.dayDown)
  }
  @computed get title () {
    return this.up ? 'Servers operational!' : 'Red alert!'
  }

  render () {
    return (
      <div className={s.uptimeDay}>
        <span className={this.className} />
        <span className={s.hover}>{this.props.day}: {this.title}</span>
      </div>
    )
  }
}
export {ServerUptimeDay}
