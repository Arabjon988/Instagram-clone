import React from 'react'
import './Messenger.css'
// import { FiSend } from 'react-icons/fi'
import Header from '../../components/header/Header'
import Send from '../../assets/story/messenger.png'
import { BsChevronDown } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

function Messenger() {
    return (
        <div className="messenger">
            <Header />
            <div className="messenger-container">
                <div className="messenger-wrapper">
                    <div className="messenger-request">
                        <div className="messenger-profile">
                            <li className="proff">
                                <p>arabjonnishonov9</p>
                                <BsChevronDown />
                            </li>
                            <BiEdit />
                        </div>
                        <div className="messages-post">
                            <div className="pending-post">
                                <h4>All Posts</h4>
                                <p>1 request pendind</p>
                            </div>
                            <div className="all-posts">
                                <li className="allPost-collection">
                                    <img src="#" alt="" className="post-image" />
                                    <div className="post-person-info">
                                        <h4>Abdulloh</h4>
                                        <p>popular</p>
                                    </div>
                                </li>
                                <li className="allPost-collection">
                                    <img src="#" alt="" className="post-image" />
                                    <div className="post-person-info">
                                        <h4>Abdulloh</h4>
                                        <p>popular</p>
                                    </div>
                                </li>
                                <li className="allPost-collection">
                                    <img src="#" alt="" className="post-image" />
                                    <div className="post-person-info">
                                        <h4>Abdulloh</h4>
                                        <p>popular</p>
                                    </div>
                                </li>
                                <li className="allPost-collection">
                                    <img src="#" alt="" className="post-image" />
                                    <div className="post-person-info">
                                        <h4>Abdulloh</h4>
                                        <p>popular</p>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="messenger-send">
                        <div className="personToSend">
                            <li> <img src={Send} alt="" /></li>
                            <h3>your messages</h3>
                            <p>Send private photos and messages to a friend or group.</p>
                            <button>send a message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger
