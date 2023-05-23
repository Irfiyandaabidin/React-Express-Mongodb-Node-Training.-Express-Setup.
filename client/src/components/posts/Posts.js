import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem'
import Spinner from '../layout/Spinner'

const Posts = ({ getPosts, post: { posts, loading }, match }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

    return loading ? (
      <Spinner/>
    ) : (
    <div>
      <h1 className='text-center'>Posts</h1>
      <p>Welcome to the community</p>

      <div>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
})

export default connect (mapStateToProps, { getPosts })(Posts)