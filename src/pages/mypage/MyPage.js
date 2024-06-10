import React, { useState, useEffect } from 'react';
import api from '../../api';

function MyPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [profileImgSrc, setProfileImgSrc] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await api.get('/api/users/profile/');
                const data = response.data;
                setEmail(data.email);
                setName(data.name);
                setBirth(data.birthday);
                setGender(data.gender);
                setProfileImgSrc(data.profile_pic);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        }

        async function fetchFavorites() {
            try {
                const response = await api.get('/api/likes/');
                setFavoriteList(response.data);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        }

        fetchProfile();
        fetchFavorites();
    }, []);

    const editProfile = async () => {
        if (isEditing) {
            try {
                const response = await api.put('/api/update_profile/', {
                    email,
                    name,
                    birthday: birth,
                    gender,
                    profile_pic: profileImgSrc
                });
                const data = response.data;
                setEmail(data.email);
                setName(data.name);
                setBirth(data.birthday);
                setGender(data.gender);
                setProfileImgSrc(data.profile_pic);
                alert("프로필이 업데이트되었습니다.");
            } catch (error) {
                console.error('Error updating profile:', error);
                alert("프로필 업데이트에 실패했습니다.");
            }
        }
        setIsEditing(prevState => !prevState);
    };

    const changeProfileImg = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('profile_pic', file);
        try {
            const response = await api.put('/api/update_profile/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProfileImgSrc(response.data.profile_pic);
        } catch (error) {
            console.error('Error uploading profile image:', error);
        }
    };

    const removeFavorite = async (id) => {
        try {
            await api.delete(`/api/likes/${id}/`);
            setFavoriteList(prevList => prevList.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    const confirmLogout = async () => {
        const logoutConfirm = window.confirm("정말로 로그아웃 하시겠습니까?");
        if (logoutConfirm) {
            try {
                await api.post('/api/logout/');
                alert("로그아웃되었습니다");
                window.location.href = "/";
            } catch (error) {
                console.error('Error logging out:', error);
            }
        }
    };

    const confirmWithdraw = async () => {
        const withdrawConfirm = window.confirm("정말로 회원을 탈퇴하시겠습니까?");
        if (withdrawConfirm) {
            try {
                await api.post('/api/delete_account/');
                alert("이용해 주셔서 감사합니다");
                window.location.href = "/signup";
            } catch (error) {
                console.error('Error deleting account:', error);
            }
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>마이페이지</h1>
            
            <div style={{ ...styles.section, ...styles.profileInfo }}>
                <h2 style={styles.sectionHeading}>내 정보</h2>
                <img src={profileImgSrc || "default-profile.png"} alt="프로필 이미지" width="100" style={styles.profileImg} />
                <input
                    type="file"
                    style={{ display: 'none' }}
                    accept="image/*"
                    id="imageInput"
                    onChange={changeProfileImg}
                />
                {isEditing && (
                    <label
                        htmlFor="imageInput"
                        style={styles.button}
                    >
                        프로필 이미지 변경
                    </label>
                )}
                <input type="email" value={email} placeholder="이메일" disabled={!isEditing} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
                <input type="text" value={name} placeholder="이름" disabled={!isEditing} onChange={(e) => setName(e.target.value)} style={styles.input} />
                <input type="text" value={birth} placeholder="생년월일" disabled={!isEditing} onChange={(e) => setBirth(e.target.value)} style={styles.input} />
                <select value={gender} disabled={!isEditing} onChange={(e) => setGender(e.target.value)} style={styles.input}>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
                <button style={styles.button} onClick={editProfile}>{isEditing ? "저장" : "수정"}</button>
            </div>
            
            <div style={styles.section}>
                <h2 style={styles.sectionHeading}>찜 목록</h2>
                <div>
                    {favoriteList.map((item) => (
                        <div key={item.id} style={styles.favoriteItem}>
                            {item.place_id} <button style={styles.button} onClick={() => removeFavorite(item.id)}>삭제</button>
                        </div>
                    ))}
                </div>
            </div>
            
            <div style={styles.logoutDelete}>
                <button style={styles.button} onClick={confirmLogout}>로그아웃</button>
                <button style={styles.button} onClick={confirmWithdraw}>회원탈퇴</button>
            </div>
        </div>
    );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '20px',
  },
  section: {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px',
  },
  sectionHeading: {
    fontSize: '1.5em',
    color: '#555',
    marginBottom: '15px',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImg: {
    borderRadius: '50%',
    marginBottom: '20px',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #d1d5da',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    marginBottom: '10px',
    fontSize: '1em',
  },
  button: {
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: '#555555',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    display: 'inline-block',
    textAlign: 'center',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#333333',
  },
  favoriteItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#ffffff',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  logoutDelete: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
};

export default MyPage;
