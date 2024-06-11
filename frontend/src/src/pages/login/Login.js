import React, { useState } from 'react';
import { Button, Modal, Form, Nav } from 'react-bootstrap';
import api from '../../api';

function Login() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/login/', { id: username, password });
            console.log(response.data);
            alert("로그인 성공");
            handleClose();
            // onLogin(response.data); // 로그인 성공 후 추가 작업이 있다면 이 함수를 호출합니다.
        } catch (error) {
            console.error('Error logging in:', error);
            alert("로그인 실패");
        }
    };

    return (
        <>
            <Nav.Link onClick={handleShow}>Login</Nav.Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="loginUsername">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="아이디를 입력하세요"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            로그인
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;
