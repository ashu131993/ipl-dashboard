// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamData: []}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({isLoading: false, teamData: formattedData})
  }

  render() {
    const {isLoading, teamData} = this.state

    return (
      <Link className="link-home" to="/">
        <div className="home-background">
          <div className="home-dashboard">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="dashboard-heading">IPL Dashboard</h1>
          </div>
          <div className="team-info">
            {isLoading ? (
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            ) : (
              teamData.map(item => <TeamCard team={item} key={item.id} />)
            )}
          </div>
        </div>
      </Link>
    )
  }
}

export default Home
