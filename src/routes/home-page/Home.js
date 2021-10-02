import React from 'react'
import Actual from '../../components/actual/Actual'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import MyComment from '../../components/my-comment/MyComment'
import Stories from '../../components/story/Stories'
import StoryPreview from '../../components/storyPreview/StoryPreview'

import {useStateValue} from '../../context/stateprovider/StateProvider'
import './Home.css'

function Home() {

    const[{activeStory}] = useStateValue()

    console.log(activeStory)
    return (
        <div className="home">
            <Header />
            <div className="home__container">
                <div className="home__wrapper">
                    <Stories />
                    <Actual />
                    <Feed/>
                </div>
                <MyComment/>
            </div>
            {activeStory ? <StoryPreview storyPreviewImage={activeStory.storyImage} /> : <> </>}
            
        </div>
    )
}

export default Home


