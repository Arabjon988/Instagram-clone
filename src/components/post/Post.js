import React, { useState } from 'react'
import './Post.css'
import { BsThreeDots } from 'react-icons/bs'
import Razm from '../../assets/story/pro2.jpg'
import Smail from '../../assets/story/smail.jpg'
import { FaRegHeart, FaRegComment, FaRegBookmark } from 'react-icons/fa'

// <FaHeart /><FaBookmark /> 
import { FiSend } from 'react-icons/fi'
import Preview from '../../routes/preview/Preview'



function Post({accountImage, posts}) {

    const [previewInfo, setPreviewinfo] = useState(null)

    const handlePreview = () =>{
        setPreviewinfo(posts)
    }


    return (
        <div className="post">
            <div className="post-human-page">
                <div className="post-head" >
                    <img src={accountImage} alt="" onMouseOver={handlePreview} onMouseOut={() => setPreviewinfo(null)} />
                    { previewInfo ? <Preview  src={posts} /> : <></>}
                    <p>Someone</p>
                    <BsThreeDots />
                </div>
                <img src={Razm} alt="" className="post-img" />
                <div className="postComment">
                    <div className="commentary">
                        <div className="post-dispatch">
                            <FaRegHeart />
                             
                            <FaRegComment className="reg-comment" />
                            <FiSend />
                        </div>
                        <FaRegBookmark />
                    </div>
                    <div className="posts-info">
                        <h3>3000,333 likes</h3>
                        <li>
                            <h5>John</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, id ab. Suscipit mollitia modi debitis!</p>
                        </li>
                        <p className="post-view">View all comment (1836)</p>
                        <li>
                            <h5>julia</h5>
                            <p>Lorem ipsum dolor sit.</p>
                        </li>
                        <span>8 HOURS AGO</span>
                    </div>
                    <div className="post-footer">
                        <img src={Smail} alt="" className="post-footer-img" />
                        <input type="text" placeholder="Add a comment" />
                        <p>Publish</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
