import React from 'react'
import './MyComment.css'
import Data from '../../data/MyComment.json'
import { VscAccount } from 'react-icons/vsc'




function MyComment() {
    return (
        <div className="my-comment">
            <div className="com-container">
                <div className="my-profile">
                    <VscAccount className="profile-logo" />
                    <li><p>arabjonnishonov9</p>
                        <h4>Arabjon Nishonov</h4>
                    </li>
                    <span>Switch</span>
                </div>
                <div className="recom-you">
                    <li><h4>Recommendations for you </h4>
                        <span>Everything</span></li>
                    <div className="subscribe">
                        {
                            Data?.map((human) => (
                                <div className="human">
                                    <div className="human-info">
                                        <img src={human?.url} alt="" className="human-logo" />
                                        <div className="person">
                                            <h5 className="person-info">{human?.name}</h5>
                                            <p>popular</p>
                                            <div className="person-fact">
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <button> Subscribe to </button>
                                </div>
                            ))
                        }
                    </div>
                    <ul className="ins-page">
                        <li>Infonmation</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>FIRE</li>
                        <li>Vacancies</li>
                        <li>Confidentiality</li>
                        <li>Conditions</li>
                        <li>Places</li>
                        <li>Popular accounts</li>
                        <li>In the hashtag</li>
                        <li>Language</li>
                    </ul>
                    <span className="ins-help">INSTAGRAM BY FACEBOOK 2021</span>
                </div>
            </div>
        </div>
    )
}

export default MyComment
