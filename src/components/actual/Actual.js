import React from 'react'
import './Actual.css'

function Actual() {
    return (
        <div className="actual">
            <p className="pace">First Pace</p>
            <ul className="actual-collection">
                <li className="actual-item"><img src="#" alt="alt" className="actual-item-img" />
                    <p>Find Facebook Friends </p>
                    <span>You decide who to subscribe to. We will never post to Facebook without your permission</span>
                </li>
                <li className="actual-item"><img src="#" alt="alt" className="actual-item-img" />
                    <p>Add your phone number</p>
                    <span>Add your phone number so you can reset your password, find friends, and more.</span>
                </li>
                <li className="actual-item"><img src="#" alt="alt" className="actual-item-img" />
                    <p>Add your image</p>
                    <span>You decide who to subscribe to. We will never post to Facebook without your permission</span>
                </li>

            </ul>
        </div>
    )
}

export default Actual
