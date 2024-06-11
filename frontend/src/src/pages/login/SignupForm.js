import React, { useState } from 'react';
import api from '../../api';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('M');  // 초기값을 'M'으로 설정
  const [birth, setBirth] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (password.length < 8) {
      alert("비밀번호는 8자리 이상이어야 합니다.");
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('profile_pic', profileImage);
    formData.append('gender', gender);
    formData.append('birthday', birth);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await api.post('/signup/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      console.error('Error signing up:', error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div style={styles.signupContainer}>
      <form onSubmit={handleSubmit} style={styles.signupForm}>
        <h1 style={styles.signupHeading}>회원가입</h1>
        <div style={styles.formGroup}>
          <label htmlFor="signupUsername" style={styles.formLabel}>아이디</label>
          <input
            type="text"
            id="signupUsername"
            name="signupUsername"
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupProfileImage" style={styles.formLabel}>프로필 이미지</label>
          <input
            type="file"
            id="signupProfileImage"
            name="signupProfileImage"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupGender" style={styles.formLabel}>성별</label>
          <select
            id="signupGender"
            name="signupGender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={styles.formInput}
          >
            <option value="M">남자</option>
            <option value="F">여자</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupBirth" style={styles.formLabel}>생일</label>
          <input
            type="date"
            id="signupBirth"
            name="signupBirth"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            required
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupFirstName" style={styles.formLabel}>이름</label>
          <input
            type="text"
            id="signupFirstName"
            name="signupFirstName"
            placeholder="이름을 입력하세요"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupLastName" style={styles.formLabel}>성</label>
          <input
            type="text"
            id="signupLastName"
            name="signupLastName"
            placeholder="성을 입력하세요"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupEmail" style={styles.formLabel}>이메일</label>
          <input
            type="email"
            id="signupEmail"
            name="signupEmail"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupPassword" style={styles.formLabel}>비밀번호</label>
          <input
            type="password"
            id="signupPassword"
            name="signupPassword"
            placeholder="비밀번호를 입력하세요(8자 이상)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="signupConfirmPassword" style={styles.formLabel}>비밀번호 확인</label>
          <input
            type="password"
            id="signupConfirmPassword"
            name="signupConfirmPassword"
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.formInput}
          />
        </div>
        <button type="submit" style={{ ...styles.button, ...styles.signupButton }}>회원가입</button>
      </form>
    </div>
  );
}

const styles = {
  signupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  signupForm: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  signupHeading: {
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
  signupButton: {},
};

export default SignupForm;
