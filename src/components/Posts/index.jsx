import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from "shards-react"


function Posts() {
  const [posts, setPosts] = useState(null);
  function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {setPosts(data)})
  }

  useEffect(() => {
    getPosts();    
  }, [])

  return (
    <Container>
      <h1>Posts</h1>
      {posts && posts.map(post => (
        <Row key={post.id} style={{marginTop: 8}}>
          <Col xs={3}> <b> {post.title} </b> </Col>
          <Col xs={9}> {post.body.slice(0, 50)}... </Col>
        </Row>        
      ))}
    </Container>
  )
}

export default Posts
