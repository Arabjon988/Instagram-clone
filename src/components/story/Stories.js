import React, { useState, useEffect } from 'react'
import '../styles-component/Stories.css'
// import StoryData from '../../data/Story-data.json'
import { useStateValue } from '../../context/stateprovider/StateProvider'
import { database } from '../../server/firebase'


function Stories() {


    const [allStories, setAllStories] = useState([])

    useEffect(() => {
        database.collection("stories").onSnapshot(allStories => {
            setAllStories(
                allStories?.docs.map(story => ({
                    uniqueId: story.id,
                    data: story.data()
                }))[0].data.storyImages
            )
        })
    }, [])


    const [{ activeStory }, dispatch] = useStateValue()
    const activePriviewStory = (image) => {

        let timer = setTimeout(() => {
            dispatch({
                type: "CLOSE_ACTIVE_STORY",
                activeStory: null
            })
        }, 5000)


        dispatch({
            type: "SET_ACTIVE_STORY",
            activeStory: {
                storyImage: image,
                timeout: timer,
                activeStory
            }
        })
    }




    return (
        <div className="stories">
            {
                allStories?.map((photo) => (
                    <div key={photo.id} className="story-human" onClick={activePriviewStory} >
                        <img src={photo} alt="" />
                        <p>hfjhabfba</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Stories
