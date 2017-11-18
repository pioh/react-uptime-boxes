
import * as React from 'react'
import {ObservableMap, computed} from 'mobx'
import {observer} from 'mobx-react'


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
    return 'uptime-day-status ' + (this.up ? 'day-up' : 'day-down')
  }
  @computed get title () {
    return this.up ? 'Servers operational!' : 'Red alert!'
  }

  render () {
    return (
      <div className='uptime-day'>
        <span className={this.className} />
        <span className='hover'>{this.props.day}: {this.title}</span>
      </div>
    )
  }
}
export {ServerUptimeDay}
