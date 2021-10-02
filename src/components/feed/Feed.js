import React from 'react'
import Post from '../post/Post'
import './Feed.css'
import {hoverData} from '../../data/HoverPreview'

function Feed() {
    return (
        <div className="feed">
        {
            hoverData?.map(
                post=> <Post key={post.id} accountImage={post.accountImages} posts={post.posts}  />
            )
        }
        </div>
    )
}

export default Feed
