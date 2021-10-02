import React from 'react';
import './StoryCircle.css';
import {useStateValue} from '../../context/stateprovider/StateProvider'

function StoryCircle({image}) {
    const [{activeStory} , dispatch] = useStateValue();
    const setActiveStory = () => {
        dispatch({
            type: "SET_ACTIVE_STORY",
            activeStory: {
                storyImage: image
            }
        })
    }
    return (
        <div className="story__circleWrapper" onClick={setActiveStory}>
            <div className="story__circle">
                <div className="story__container">
                    <img src={image} alt="" className="story__circleImage"/>
                </div>
            </div>
            <span className="story__circleUsername">Ibrokhim</span>
        </div>
    )
}

export default StoryCircle