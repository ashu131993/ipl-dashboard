// Write your code here
import './index.css'

const TeamCard = prop => {
  const {team} = prop

  const {id, name, teamImageUrl} = team

  return (
    <button type="button" className="team-card">
      <img className="team-logo" src={teamImageUrl} alt={name} />
      <h1 className="team-name">{name}</h1>
    </button>
  )
}

export default TeamCard
