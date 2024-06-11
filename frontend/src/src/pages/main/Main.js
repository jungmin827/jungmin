import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)`
  background-color: white;
  border: 1px solid skyblue;
  color: skyblue;
  &:hover {
    background-color: #f0f8ff;
    color: skyblue;
  }
  animation: slide-up-button 1s ease-out;
  opacity: 0;
  animation-fill-mode: forwards; /* 애니메이션이 끝난 후에도 상태를 유지 */
  animation-delay: 2s; /* 2초 후에 애니메이션 시작 */
`;

function Main(){
  const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/plan');
    };
    
    return(
            <div className="container">
              <div className="row">
              <div className="carousel-container"> 
                
              <Carousel controls={false}>
                    <Carousel.Item interval={2000}>
                      <img
                        className="d-block w-100"
                        src="https://www.gn.go.kr/tour/images/tour/main_new/mvisual_img03.jpg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>강릉</h3>
                        <p>맛있는 음식을 찾아서, 마음을 힐링 할 수 있는 곳을 찾아서, 특별한 추억을 만들기 위해​
사람들은 새로운 여행지를 찾습니다. 강릉으로 오세요!​</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.gn.go.kr/tour/images/tour/main_new/mvisual_img01.jpg"
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3>속초</h3>
                        <p>산, 바다, 호수를 함께 즐길 수 있는 그곳..속초를 여행하세요.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://tour.yangyang.go.kr/dzSmart/upfiles/Tours/2022June/24/1655456346_9b6ed19c1cfd5c9e4c23b35fe2d1bedf.jpg"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>양양</h3>
                        <p>똑똑한 여행! 내가 만드는 양양여행</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="http://tour.chuncheon.go.kr/front/images/banner/58b5775bdf6e4110902b4cf8c514a051.jpg"
                        alt="slide4"
                      />
                      <Carousel.Caption>
                        <h3>춘천</h3>
                        <p>춘천으로 낭만여행, 지금 떠나세요</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://tour.pc.go.kr/upload/2023/0911/202309111694407709775048.jpg"
                        alt="slide5"
                      />
                      <Carousel.Caption>
                        <h3>평창</h3>
                        <p>캠핑 천국 평창</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                  
                  <p/>
                <hr/>
                
            </div>
            <div className="recommendation-text">
                <p className="text-large">같은 여행지 추천은 그만!</p>
                <p className="text-small">밤양갱원을 이용해보세요</p>
                <StyledButton onClick={handleButtonClick}>계획 짜러가기</StyledButton>
            </div>
          </div>
    )
}

export default Main;
