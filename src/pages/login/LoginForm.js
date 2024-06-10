import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import api from '../../api';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/login/', { username, password });
      console.log(response.data);
      alert("로그인 성공");
      onLogin(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
      alert("로그인 실패");
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginForm}>
        <Form onSubmit={handleSubmit}>
          <h1 style={styles.loginHeading}>로그인</h1>
          <Form.Group controlId="loginUsername" style={styles.formGroup}>
            <Form.Label style={styles.formLabel}>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.formInput}
            />
          </Form.Group>
          <Form.Group controlId="loginPassword" style={styles.formGroup}>
            <Form.Label style={styles.formLabel}>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.formInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={styles.button}>로그인</Button>
          <div style={styles.signupLink}>
            아직 회원이 아니신가요? <Link to="/signupform" style={styles.link}>회원가입</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loginForm: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  loginHeading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '5px',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#555555',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#333333',
  },
  signupLink: {
    textAlign: 'center',
    marginTop: '10px',
  },
  link: {
    color: '#555555',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default LoginForm;
