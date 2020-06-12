import React from 'react'
import { Button, Tooltip, Typography, Card, CardActions, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 25,        
    },
    data: {
        maxWidth: 600,
        margin: '10px auto',
        maxHeight: 200,
        overflow: 'auto',
        padding: 20,
        backgroundColor: '#e7f9ff',
        borderRadius: '5px 5px',
        webkitAnimationName: 'move',
    	webkitAnimationDuration: '4s',
    	webkitAnimationIterationCount: 'infinite',
    	webkitAnimationDirection: 'right',
    	webkitAnimationTimingFunction: 'linear',
    }
  });

const Post = ({post, likePost, deletePost}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.data}>
                <Typography align='justify' color='textSecondary' display='block' variant='body2'>
                    {post?.data}
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title={post.likes}>
                    <Button onClick={() => likePost(post.id)} size="small">Like</Button>
                </Tooltip>
                <Button onClick={() => deletePost(post.id)} size="small">Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Post