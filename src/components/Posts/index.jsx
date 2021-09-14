import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Container, Row, Col} from "shards-react"
import {fetchPosts} from '../../actions/post.actions'

function Posts() {
  const posts = useSelector(state => state.post.items)
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(fetchPosts());    
    console.log(posts);
  }, []);

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
