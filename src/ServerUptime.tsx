
import * as React from 'react'
import {ObservableMap, computed} from 'mobx'
import {observer} from 'mobx-react'

import {ServerUptimeDay} from './ServerUptimeDay'


interface IServerUptimeProps {
  name: string,
  days: ObservableMap<boolean>,
}

@observer
class ServerUptime extends React.Component<IServerUptimeProps> {
  render () {
    return (
      <div className='server-uptime'>
        <h1>{this.props.name}</h1>
        <ServerUptimeStats days={this.props.days} />
        <div className="days">
          {this.props.days.keys().map(day => 
            <ServerUptimeDay key={day} days={this.props.days} day={day} />
          )}
        </div>
      </div>
    )
  }
}
export {ServerUptime}

interface IServerUptimeStatsProps {
  days: ObservableMap<boolean>,
}
@observer
class ServerUptimeStats extends React.Component<IServerUptimeStatsProps> {
  @computed get upDays () {
    let sum = 0
    this.props.days.forEach(up => sum += up ? 1 : 0)
    return sum
  }
  @computed get biggestStreak () {
    let sum = 0
    let max = 0
    this.props.days.forEach(up => {
      if (!up) {
        if (sum > max) max = sum
        sum = 0
      } else sum++
    })
    if (sum > max) max = sum
    return max
  }
  render () {
    return (
      <div>
        <h2>{this.upDays} Days Up</h2>
        <h2>Biggest Streak: {this.biggestStreak}</h2>
      </div>
    )
  }
}

