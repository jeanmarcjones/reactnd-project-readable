import React from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../actions/score'
import ThumbUp from 'react-icons/lib/md/thumb-up'
import ThumbDown from 'react-icons/lib/md/thumb-down'

function VoteScore(props) {
  return (
    <div className="vote-score">
      <ThumbUp
        className="vote-score__down"
        onClick={() => props.update({ id: props.info.id, component: props.info.component, option: 'upVote' })}
      />
      <span style={{margin: '0 10px'}}>{props.info.score}</span>
      <ThumbDown
        className="vote-score__up"
        onClick={() => props.update({ id: props.info.id, component: props.info.component, option: 'downVote' })}
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
