import React from 'react'
import { TextField, Button } from '@material-ui/core';

const CreatePost = ({createPost}) => {
    const [textInput, setTextInput] = React.useState('')
    
    const handleTextInputState = ({target}) => {
        setTextInput(target.value)
    }

    const addPost = () => {
        const response = createPost(textInput)
        if(response){
            setTextInput('')
        }
    }

    return (
        <React.Fragment>
            <TextField
                id="standard-multiline-flexible"
                label="New Post"
                multiline
                value={textInput}
                onChange={handleTextInputState}
            />
            <Button onClick={addPost} variant="contained">Submit Post</Button>
        </React.Fragment>
    )
}

export default CreatePost