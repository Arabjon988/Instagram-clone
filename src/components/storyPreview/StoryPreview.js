import React from 'react'
import './StoryPreview.css'
import { FiX } from 'react-icons/fi'
import { useStateValue } from '../../context/stateprovider/StateProvider'

function StoryPreview({storyPreviewImage}) {
    const [{activeStory}, dispatch] = useStateValue() 
    const closePreview = () =>{
        dispatch({
            type: "CLOSE_ACTIVE_STORY",
            activeStory: null
        })
        clearTimeout(activeStory.timeout)
    }

    console.log(activeStory)
    return (
        <div className="story-preview">
            
        <FiX className="preview-close" onClick={closePreview} />
            <div className="story-previewLoading">
                <div className="innerLoading"></div>
            </div>

            <img src={storyPreviewImage} alt="" />
        </div>
    )
}

export default StoryPreview
