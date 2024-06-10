import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import Layout from '../layout/Layout';

const { kakao } = window;

const MapContainer = styled.section`
  padding: 1rem;
  position: sticky;
  top: 0;
`;

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #eee;
`;

const DateInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const DateBox = styled.div`
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100px;
  text-align: center;
  margin-right: 0.5rem;
`;

const DateDisplay = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
`;

const StyledButton = styled(Button)`
  background-color: white;
  border: 1px solid skyblue;
  color: skyblue;
  &:hover {
    background-color: #f0f8ff;
    color: skyblue;
  }
`;

const InfoButton = styled(Button)`
  background-color: white;
  border: 1px solid skyblue;
  color: skyblue;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  &:hover {
    background-color: #f0f8ff;
    color: skyblue;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
`;

const LayoutContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #87CEEB;
  padding: 20px;
  margin: 20px;
`;

const KeywordsContainer = styled(LayoutContainer)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-height: 200px; 
  overflow-y: auto; 
  padding: 10px; 
`;

const KeywordItem = styled.div`
  display: flex;
  align-items: center;
`;

function Plan() {
  const [places, setPlaces] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [map, setMap] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [polyline, setPolyline] = useState(null);
  const [selectedPlaceDetail, setSelectedPlaceDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchPlaces = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/places/');
      setPlaces(response.data);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedKeywords([]);
  };

  const handleKeywordChange = (keyword) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.includes(keyword)
        ? prevKeywords.filter((kw) => kw !== keyword)
        : [...prevKeywords, keyword]
    );
  };

  const addPlace = (place) => {
    setSelectedPlaces((prevSelectedPlaces) => {
      if (prevSelectedPlaces.some((p) => p.place_id === place.place_id)) {
        return prevSelectedPlaces.filter((p) => p.place_id !== place.place_id);
      } else {
        moveToLocation(place.latitude, place.longitude);
        return [...prevSelectedPlaces, place];
      }
    });
  };

  const moveToLocation = (lat, lng) => {
    if (map) {
      const moveLatLon = new kakao.maps.LatLng(lat, lng);
      map.panTo(moveLatLon);
    }
  };

  const handleShowDetail = (place) => {
    setSelectedPlaceDetail(place);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setSelectedPlaceDetail(null);
    setShowDetail(false);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.8228, 128.1555), // 강원도 중앙 좌표
      level: 7, // 지도의 레벨(확대, 축소 정도)
    };

    var mapInstance = new kakao.maps.Map(container, options);
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map) {
      const markers = selectedPlaces.map((place) => {
        const markerPosition = new kakao.maps.LatLng(place.latitude, place.longitude);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        return marker;
      });

      return () => {
        markers.forEach((marker) => marker.setMap(null));
      };
    }
  }, [selectedPlaces, map]);

  const calculateNights = (start, end) => {
    if (!start || !end) return null;
    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff;
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setShowDatePicker(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}/${month}/${day}`;
  };

  const createRoute = () => {
    if (polyline) {
      polyline.setMap(null);
    }

    const path = selectedPlaces.map((place) => new kakao.maps.LatLng(place.latitude, place.longitude));

    const newPolyline = new kakao.maps.Polyline({
      path,
      strokeWeight: 5,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeStyle: 'solid',
    });

    newPolyline.setMap(map);
    setPolyline(newPolyline);

    if (path.length > 0) {
      const bounds = new kakao.maps.LatLngBounds();
      path.forEach((point) => bounds.extend(point));
      map.setBounds(bounds);
    }
  };

  const filteredOptions = selectedRegion === '전체'
    ? places
    : places.filter((place) => place.region_id === selectedRegion);

  const selectedOptionContent = selectedOption ? filteredOptions.filter((place) => place.type_id === selectedOption) : filteredOptions;

  const selectedOptionKeywords = selectedOptionContent.reduce((acc, place) => {
    if (place.placekeywords) {
      place.placekeywords.forEach((kw) => {
        if (!acc.includes(kw.kw_name)) {
          acc.push(kw.kw_name);
        }
      });
    }
    return acc;
  }, []);

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <Form.Group controlId="regionSelect">
              <Form.Label>지역 선택</Form.Label>
              <Form.Control as="select" value={selectedRegion} onChange={handleRegionChange}>
                <option value="전체">전체</option>
                <option value="속초">속초</option>
                <option value="양양">양양</option>
                <option value="강릉">강릉</option>
                <option value="춘천">춘천</option>
                <option value="평창">평창</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="dateRange">
              <Form.Label>날짜 선택</Form.Label>
              <DateInput onClick={() => setShowDatePicker(true)}>
                <DateBox>{startDate ? formatDate(startDate) : '시작일'}</DateBox>
                <span> ~ </span>
                <DateBox>{endDate ? formatDate(endDate) : '종료일'}</DateBox>
                <FaCalendarAlt />
                {startDate && endDate && (
                  <DateDisplay>
                    {calculateNights(startDate, endDate)}박 {calculateNights(startDate, endDate) + 1}일
                  </DateDisplay>
                )}
              </DateInput>
              {showDatePicker && (
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              )}
            </Form.Group>
            <OptionsContainer>
              {['지역명소', '휴양', '액티비티', '카페', '밥집'].map((option) => (
                <OptionItem key={option}>
                  <input
                    type="radio"
                    id={option}
                    onChange={() => handleOptionChange(option)}
                    checked={selectedOption === option}
                  />
                  <label htmlFor={option}>{option}</label>
                </OptionItem>
              ))}
            </OptionsContainer>
            {selectedOption && (
              <KeywordsContainer>
                {selectedOptionKeywords.map((keyword) => (
                  <KeywordItem key={keyword}>
                    <input
                      type="checkbox"
                      id={keyword}
                      onChange={() => handleKeywordChange(keyword)}
                      checked={selectedKeywords.includes(keyword)}
                    />
                    <label htmlFor={keyword}>{keyword}</label>
                  </KeywordItem>
                ))}
              </KeywordsContainer>
            )}
            <Modal show={showDetail} onHide={handleCloseDetail}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {selectedPlaceDetail?.place_name}
                  <Button variant="link" onClick={toggleFavorite} style={{ float: 'right', color: isFavorite ? 'red' : 'gray' }}>
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p><strong>Address:</strong> {selectedPlaceDetail?.place_addr}</p>
                <p><strong>Region:</strong> {selectedPlaceDetail?.region_id}</p>
                <p><strong>Keywords:</strong> {selectedPlaceDetail?.placekeywords ? selectedPlaceDetail.placekeywords.map(kw => kw.kw_name).join(', ') : 'N/A'}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDetail}>Close</Button>
              </Modal.Footer>
            </Modal>
            <h2>Travel List</h2>
            <div className="content-box">
              <Container>
                <Row>
                  {selectedOptionContent
                    .filter((item) => selectedKeywords.every((kw) => item.placekeywords && item.placekeywords.map(k => k.kw_name).includes(kw)))
                    .map((item, index) => (
                      <Col md={6} key={`${selectedOption}-${index}`}>
                        <Card>
                          <Card.Img
                            variant="top"
                            src={item.place_image_url}
                            onError={(e) => e.target.src = require('../imgsrc/logo.png')}
                          />
                          <Card.Body>
                            <Card.Title>{item.place_name}</Card.Title>
                            <Card.Text>{item.place_addr}</Card.Text>
                            <StyledButton onClick={() => addPlace(item)}>
                              {selectedPlaces.some((p) => p.place_id === item.place_id) ? '✔' : '+'}
                            </StyledButton>
                            <InfoButton variant="link" onClick={() => handleShowDetail(item)}>i</InfoButton>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </div>
            <h2>Select</h2>
            <div className="selected-places-box">
              <ul>
                {selectedPlaces.map((place, index) => (
                  <li key={index}>
                    <strong>{place.place_name}</strong> - {place.place_addr}
                    <Button variant="link" onClick={() => moveToLocation(place.latitude, place.longitude)}>
                      지도 이동
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <StyledButton onClick={createRoute} className="mt-4">
              경로 생성하기
            </StyledButton>
          </Col>
          <Col md={6}>
            <MapContainer>
              <Map id="map" />
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Plan;
