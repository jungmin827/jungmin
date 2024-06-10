import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    window.kakao.maps.load(() => {
      let container = document.getElementById('map');
      let options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };
      let map = new window.kakao.maps.Map(container, options);
    });
  }, []);

  return <div id="map" style={{width: '500px', height: '400px'}}></div>;
};

export default KakaoMap;
