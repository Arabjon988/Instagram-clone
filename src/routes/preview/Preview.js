import React, { useState } from 'react'
import './Preview.css'
import { hoverData } from '../../data/HoverPreview'

function Preview(posts) {

    const [previewInfo, setPreviewinfo] = useState(null)

    const handlePreview = () => {
        setPreviewinfo(posts)
    }



    return (
        <div className="preview">
            {
                hoverData?.map(preview => (
                    <div className="preview-container">
                        {previewInfo ? <div className="preview-wrapper" key={preview.id} onMouseOver={handlePreview} onMouseOut={() => setPreviewinfo(null)}>
                            <img src={preview.accountImages} alt="" />
                            <img src={preview.posts} alt="" />
                        </div> : <></>}
                    </div>
                ))
            }
        </div>
    )
}

export default Preview
// <img src={preview.posts} alt="" />
