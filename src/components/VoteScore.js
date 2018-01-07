import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../actions/posts'
import ThumbUp from 'react-icons/lib/md/thumb-up'
import ThumbDown from 'react-icons/lib/md/thumb-down'

class VoteScore extends Component {
  render() {
    const { info, update } = this.props

    return (
      <p className="vote-score">
        <ThumbUp
          className="vote-score__down"
          onClick={() => update({ id: info.id, component: info.component, option: 'upVote' })}
        />
        <span style={{margin: '0 10px'}}>{info.score}</span>
        <ThumbDown
          className="vote-score__up"
          onClick={() => update({ id: info.id, component: info.component, option: 'downVote' })}
        />
      </p>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    update: (data) => dispatch(updateScore(data))
})

export default connect(
  null,
  mapDispatchToProps
)(VoteScore)
