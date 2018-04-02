import React from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../actions/score'
import ThumbUp from 'react-icons/lib/md/thumb-up'
import ThumbDown from 'react-icons/lib/md/thumb-down'

function VoteScore({ info: { id, component, score }, update }) {
  return (
    <div className="vote-score">
      <ThumbUp
        className="vote-score__down"
        onClick={() => update({ id: id, component: component, option: 'upVote' })}
      />
      <span style={{margin: '0 10px'}}>{score}</span>
      <ThumbDown
        className="vote-score__up"
        onClick={() => update({ id: id, component: component, option: 'downVote' })}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(updateScore(data))
})

export default connect(
  null,
  mapDispatchToProps
)(VoteScore)
