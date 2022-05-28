import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {Button, Form, } from 'react-bootstrap'
import styles from './addcomment.module.css'
import {sendComment} from '../../http/userAPI'

const AddComment = ({show, onHide}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('')

  const send = () => {
      if(name && comment && email.match(/@.+\.[A-Za-z]+$/)){
        sendComment({name:name, email:email, body:comment}).then(data => {setName('');setEmail('');setComment('')})
        onHide()
      }
      else if (!name) {alert('Empty name')}
      else if (!email.match(/@.+\.[A-Za-z]+$/)) {alert('Wrong Email')}
      else if (!comment) {alert('Empty comment')} 
  }

    return (
        
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Group >
                <Form.Control
                    className="mt-3"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder={'Enter your name'} />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-3"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder={'Enter your Email'} />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-3"
                    value={comment}
                    onChange={event => setComment(event.target.value)}
                    placeholder={'Enter your comment'} />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" onClick={send}  className={styles.btn}>Send</button>
      </Modal.Footer>
    </Modal>
    )}

export default AddComment;