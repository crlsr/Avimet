import React from 'react'
import './ImageInput.css'

export default function ImageInput( {className, file, setFile, inputId} ) {
    // const [file , setFile] = React.useState('')
    const [image , setImage] = React.useState('')

    var labelClass = ''

    if (className == 'previewMain') {
        labelClass = 'mainLabel'
    } else if (className == 'previewSub') {
        labelClass = 'subLabel'
    } else {
        labelClass = 'bottomLabel'
    }

    console.log(className)


    React.useEffect(() => {
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            setImage(objectUrl)
            console.log(image)
        }
            
    }, [file])

    return (
        <div className='imageContainer'>
            <img
                src={image ?? null}
                className={className}
            />
            <label for={inputId} className={`${labelClass} label ${image ? 'fileSelected': ''}`}>Subir Imagen</label>
            <input 
                type='file'
                id={inputId}
                accept="image/*"
                className="visually-hidden"
                onChange={(e) => {console.log(e.target.files); setFile(e.target.files[0])}}
            />
        </div>
    )


}
