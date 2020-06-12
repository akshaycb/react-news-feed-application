import React from 'react'
import Post from './Components/Post'
import './App.css'
import Header from './Components/Header'
import CreatePost from './Components/CreatePost'
import { CircularProgress } from '@material-ui/core';
import { createPost, getPosts, likePost, deletePost } from './services/postsService'

function App() {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)

  const getAllPosts = async () => {
    const response = await getPosts()
    if(response){
      setPosts(response.reverse())
      setLoading(false)
    }
  }

  React.useEffect(()=>{
    getAllPosts()
  }, [])

  const addPost = async (postData) => {
    if(postData){
      const response = await createPost(postData)
      setPosts((prevPosts)=> [response, ...prevPosts])
      return true
    }
  }

  const incrementLike = (id) => {
    likePost(id)
    setPosts((prevPosts) => {
      const posts = prevPosts.map((post)=>{
        if(post.id == id){
          post.likes = parseInt(post.likes) + 1
        }
        return post
      })
      return posts
    })
  }

  const destroyPost = (id) => {
    deletePost(id)
    setPosts((prevPosts)=>{
      const posts = prevPosts.filter((post)=>{
        return (post.id == id) ? false : true
      })
      return posts
    })
  }

  return (
    <div className="App">
      <Header />
      <main className="App-body">
        <div className="Newsfeed">
          <CreatePost createPost={addPost}/>
          {isLoading ? <div style={{marginTop: '80px'}}><CircularProgress /></div> : (
            posts.length > 0 && posts.map((post, i)=><Post key={i} post={post} likePost={incrementLike} deletePost={destroyPost}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
