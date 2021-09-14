import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Container, Row, Col, Form, FormGroup, FormInput, Button} from "shards-react"
import { insertPost } from '../../actions/post.actions';

function Postform() {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  function onChange(event) {
    setPost({...post, [event.target.name]: event.target.value});
  }

  const dispatch = useDispatch();

  function onSubmit(e){
    e.preventDefault();

    dispatch(insertPost(post)).then(()=>{
      setPost({
        title: '',
        body: ''
      });
    })
  }

  return (
    <Container>
      <h1>Add post</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="#title">Title</label>
          <FormInput id="#title" name="title" value={post.title} onChange={onChange}></FormInput>
        </FormGroup>
        <FormGroup>
          <label htmlFor="#body">Body</label>
          <FormInput id="#body" name='body' value={post.body} onChange={onChange}></FormInput>
        </FormGroup>

        <Button> Enviar </Button>
      </Form>
    </Container>
  )
}

export default Postform
