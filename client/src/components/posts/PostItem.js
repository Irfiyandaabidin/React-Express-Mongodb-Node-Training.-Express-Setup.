import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLike, removeLike } from '../../actions/post'

const PostItem = ({
    auth, 
    post: { _id, text, name, avatar, user, likes, comments, date },
    addLike,
    removeLike
}) => {
    console.log(likes)
  return (
    <div>
        <div>
            <a>
                <img src={avatar}/>
                <h4>{name}</h4>
            </a>
        </div>
        <div>
            <p>
                {text}
            </p>
            <p>
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
            <div className='flex'>
                <button 
                    onClick={e => addLike(_id)}
                    type="button"
                >
                    <AiFillLike />
                    <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                <button 
                    onClick={e => removeLike(_id)}
                    type="button"
                >
                    <AiFillDislike />
                </button>
            </div>
            <Link to={`/posts/${_id}`}>
                Discussion{' '}
                {comments.length > 0 && (
                    <span>{comments.length}</span>
                )}
            </Link>
            {!auth.loading && user == auth.user._id && (
                <button
                // onClick={e => deletePost(_id)}
                type="button"
                >
                </button>
            )}
        </div>
    </div>
  )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect (mapStateToProps, {addLike, removeLike})(PostItem);