const restaurants = [
    //춘천
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190115_70%2F1547531700019uBrDs_JPEG%2F9zxR41eTRcf2YXNobBaUWzLp.jpg",
      "name": "풍경밥집",
      "address": "강원 춘천시 남산면 강촌로 62",
      "coords": {
        "lat": 37.81239575212181,
        "lng": 127.6335102437721
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "양이 많아요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190115_70%2F1547532988325IspcN_JPEG%2FhlgfqTrif3QERIYrxmDHUHyQ.jpg",
      "name": "강촌시골밥집",
      "address": "강원 춘천시 강촌로 124",
      "coords": {
        "lat": 37.80840274896499,
        "lng": 127.63635478656892
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190112_246%2F15472868469198olqO_JPEG%2F7wHQ0LfPi-JXa0yOcEV1e7R7.jpg",
      "name": "백령밥집",
      "address": "강원 춘천시 백령로 182",
      "coords": {
        "lat": 37.87631307081183,
        "lng": 127.74646743691818
      },
      "region": "춘천",
      "keywords": [
        "가성비가 좋아요",
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170309_173%2F1489034692663p81qO_JPEG%2F186259537471522_1.jpeg",
      "name": "우두동밥집",
      "address": "강원 춘천시 충열로 151",
      "coords": {
        "lat": 37.90641684808703,
        "lng": 127.73944308800903
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221105_129%2F16675988228320ySrN_JPEG%2F25337C04-8337-46EB-A49A-D9192021BC81.jpeg",
      "name": "유하",
      "address": "강원 춘천시 중앙로67번길 18 4동 4107호",
      "coords": {
        "lat": 37.877961549023794,
        "lng": 127.72779792926178
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "매장이 청결해요",
        "재료가 신선해요",
        "친절해요",
        "인테리어가 멋져요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220509_10%2F1652068187635dyCdj_JPEG%2Fimage.jpg",
      "name": "우두부대찌개 강북점",
      "address": "강원 춘천시 영서로 2818 1층",
      "coords": {
        "lat": 37.904516844138996,
        "lng": 127.72626857365417
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "재료가 신선해요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190619_231%2F1560919645621AcLQY_JPEG%2FfSpGNGNT0TPJaLS38PurB3Ic.jpg",
      "name": "대진식당",
      "address": "강원 춘천시 스포츠타운길 437-1",
      "coords": {
        "lat": 37.869180971905244,
        "lng": 127.70576586478833
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "반찬이 잘 나와요",
        "가성비가 좋아요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171016_60%2F1508155584775YWjGS_JPEG%2FeGRjwQIVccWIWXpMd6pKmFRV.jpg",
      "name": "원래는 밥집이었다",
      "address": "강원 춘천시 서부대성로205번길 9-1",
      "coords": {
        "lat": 37.87495110567828,
        "lng": 127.74172551952192
      },
      "region": "춘천",
      "keywords": [
        "-"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240320_121%2F1710901064800HIRYy_JPEG%2F1000009695.jpg",
      "name": "한끼의미학",
      "address": "강원 춘천시 공지로 254 . 1층",
      "coords": {
        "lat": 337.86469749967114,
        "lng": 127.73614517230445
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "재료가 신선해요",
        "친절해요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230110_250%2F1673281336958kC3Ma_JPEG%2F7C2A6766-F3F3-45FC-85BF-8FE4865A6876.jpeg",
      "name": "유미카츠 춘천점",
      "address": "강원 춘천시 춘천로17번길 21 춘천강남하이엔드 1층 118호",
      "coords": {
        "lat": 37.86679162930337,
        "lng": 127.71947147097762
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "매장이 청결해요",
        "친절해요",
        "혼밥하기 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230918_172%2F16949991924546sIzA_JPEG%2Ftemp_file.jpg",
      "name": "양반청국장",
      "address": "강원 춘천시 신북읍 배후령길 71 261-1번지",
      "coords": {
        "lat": 37.93569338879078,
        "lng": 127.78382064019867
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "건강한 맛이에요",
        "반찬이 잘 나와요",
        "친절해요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220728_266%2F16589908006526KMgL_JPEG%2F20220728_093837.jpg",
      "name": "정담은",
      "address": "강원 춘천시 백령로165번길 2",
      "coords": {
        "lat": 37.87599548101117,
        "lng": 127.74469114206256
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "친절해요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221223_149%2F1671779673908OAPCb_JPEG%2FKakaoTalk_20221223_161341256_05.jpg",
      "name": "하정식당",
      "address": "강원 춘천시 소양로120번길 18-1 1층",
      "coords": {
        "lat": 37.8897796,
        "lng": 127.7398952
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "반찬이 잘 나와요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200504_175%2F1588560555837W7Vig_JPEG%2FckI1tiuKDA2ftgc7DTGvThx5.jpg",
      "name": "행복가마솥밥 롯데마트춘천점",
      "address": "강원 춘천시 방송길 84",
      "coords": {
        "lat": 37.8686279,
        "lng": 127.7180146
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "혼밥하기 좋아요",
        "주차하기 편해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240208_128%2F1707372645013uj2oN_JPEG%2FIMG_7100.jpeg",
      "name": "한림밥상",
      "address": "강원 춘천시 동면 만천양지길 149 1층",
      "coords": {
        "lat": 37.8895808,
        "lng": 127.76977
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/981807043/home",
      "name": "아워홈춘천교대기숙사점",
      "address": "강원 춘천시 공지로 126 춘천교육대학교",
      "coords": {
        "lat": 37.8590126,
        "lng": 127.7483479
      },
      "region": "춘천",
      "keywords": [
        "혼밥하기 좋아요",
        "매장이 청결해요",
        "화장실이 깨끗해요",
        "매장이 넓어요",
        "음식이 맛있어요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1301815586/home",
      "name": "대박식당",
      "address": "강원 춘천시 소양로 216-1",
      "coords": {
        "lat": 37.8897796,
        "lng": 127.7398952
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "혼밥하기 좋아요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1171110674/home",
      "name": "퇴계 쌀 직매장",
      "address": "강원 춘천시 안마산로 213 80호",
      "coords": {
        "lat": 37.8499296,
        "lng": 127.7377429
      },
      "region": "춘천",
      "keywords": [
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230906_216%2F16939879847184mdNX_PNG%2F7_1280px.png",
      "name": "엉터리해장국 춘천점",
      "address": "강원 춘천시 춘천로 205 1층",
      "coords": {
        "lat": 37.8772854,
        "lng": 127.7368431
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240226_139%2F17089484905439S4wD_JPEG%2F1._%25B6%25AF%25C3%25CA%25C5%25A9%25B8%25B2_%25C6%25C4%25BD%25BA%25C5%25B8.jpg",
      "name": "덕수파스타 춘천온의",
      "address": "강원 춘천시 방송길 77 1층 1114, 1136호",
      "coords": {
        "lat": 37.8694294,
        "lng": 127.720235
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "인테리어가 멋져요",
        "재료가 신선해요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211230_81%2F1640849084598R04GQ_JPEG%2F1.jpg",
      "name": "채선당 행복가마솥밥 홈플러스춘천점",
      "address": "강원 춘천시 김유정로 1840 지하1층",
      "coords": {
        "lat": 37.8506225,
        "lng": 127.7347471
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "주차하기 편해요",
        "매장이 넓어요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240313_168%2F1710307320723N5yPQ_JPEG%2FKakaoTalk_20231019_172815740_18.jpg",
      "name": "저스트텐동 강원대점",
      "address": "강원 춘천시 서부대성로 225 1층",
      "coords": {
        "lat": 37.8735331,
        "lng": 127.743327
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "매장이 청결해요",
        "매장이 넓어요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240328_171%2F1711605152747LpwaU_JPEG%2F3.jpg",
      "name": "보돌미역 춘천만천점",
      "address": "강원 춘천시 동면 춘천순환로 514 1층",
      "coords": {
        "lat": 37.8897796,
        "lng": 127.7398952
      },
      "region": "춘천",
      "keywords": [
        "-"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210403_278%2F16174350171390qGnS_JPEG%2FbQgY9dqKkNHIIvVS0keJhyU5.jpeg.jpg",
      "name": "쿡1015 후평포스코점",
      "address": "강원 춘천시 보안길 65 엠타워 108호",
      "coords": {
        "lat": 37.8817603,
        "lng": 127.7479686
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "종류가 다양해요",
        "포장이 깔끔해요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191208_204%2F15757965996375yEUx_JPEG%2FCDhGa8H3jxBysEZLBOtsnX3x.jpg",
      "name": "세월교밥집",
      "address": "강원 춘천시 신북읍 신샘밭로 749",
      "coords": {
        "lat": 37.9325506,
        "lng": 127.7918752
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/15640417/home",
      "name": "원용식당",
      "address": "강원 춘천시 동면 가락재로 1337 1층",
      "coords": {
        "lat": 37.862474,
        "lng": 127.8500013
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "친절해요",
        "반찬이 잘 나와요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170912_255%2F1505177572326BuJJk_JPEG%2FBpucbYVeK2hA0bDKGze1LWeD.jpg",
      "name": "정호밥집",
      "address": "강원 춘천시 부평길 16",
      "coords": {
        "lat": 37.8744543,
        "lng": 127.7516354
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "주차하기 편해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230717_247%2F1689583829490gvAd2_JPEG%2F1681712440239.jpg",
      "name": "냉삼포차",
      "address": "강원 춘천시 공지로 210 1층",
      "coords": {
        "lat": 37.8626346,
        "lng": 127.7403067
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "혼술하기 좋아요",
        "친절해요",
        "주차하기 편해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210709_296%2F162582636275173gKM_JPEG%2FX_iCtmD1xZTheZ8xEa0WoABX.jpg",
      "name": "최가네진순두부",
      "address": "강원 춘천시 남산면 강촌로 327",
      "coords": {
        "lat": 37.7918654,
        "lng": 127.6445825
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1190339405/home",
      "name": "한삶밥집",
      "address": "강원 춘천시 약사고개길 23 죽림동성당",
      "coords": {
        "lat": 37.876364,
        "lng": 127.7270891
      },
      "region": "춘천",
      "keywords": [
        "-"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_201%2F1710984341714gYg9o_JPEG%2FKakaoTalk_20240321_101341258.jpg",
      "name": "옛골밥집",
      "address": "강원 춘천시 남산면 소주고개로 654",
      "coords": {
        "lat": 37.7835022,
        "lng": 127.6465958
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "주차하기 편해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230508_145%2F1683534440433P8AQT_JPEG%2F%25C1%25A4%25C1%25B7%25B8%25AE%25B9%25E4%25C1%25FD%25B0%25A3%25C6%25C7.jpg",
      "name": "정족리밥집",
      "address": "강원 춘천시 신동면 솟발1길 17 1층",
      "coords": {
        "lat": 37.8457363,
        "lng": 127.7313673
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230813_271%2F1691902947896FWhCt_JPEG%2F%25C7%25D8%25B9%25B0%25BC%25F8%25B5%25CE%25BA%25CE_%25C1%25A4%25B8%25E9.jpg",
      "name": "신해물순두부",
      "address": "강원 춘천시 지내고탄로 5 1층",
      "coords": {
        "lat": 37.9333603,
        "lng": 127.7225712
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190116_84%2F15476401426527iBqM_JPEG%2FOR4wBjH5A-4Po7j3JQJmU9Wb.jpg",
      "name": "삼남매백반전문",
      "address": "강원 춘천시 춘천로170번길 8",
      "coords": {
        "lat": 37.8756918,
        "lng": 127.7332871
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "반찬이 잘 나와요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221226_206%2F1672037986508Irr8Y_PNG%2F20221226_155628.png",
      "name": "순이네불쭈꾸미&닭볶음탕 우두점",
      "address": "강원 춘천시 충열로16번길 12",
      "coords": {
        "lat": 37.8997219,
        "lng": 127.7289292
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180826_275%2F1535253918037g0ugy_JPEG%2Ff9lk8LyDkQAcOK4f9X5nALGx.jpeg.jpg",
      "name": "봄내예찬",
      "address": "강원 춘천시 동면 삭주로 243",
      "coords": {
        "lat": 37.8883649,
        "lng": 127.7570381
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "친절해요",
        "주차하기 편해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220424_297%2F1650791875031nxSzr_JPEG%2FIMG_20220410_142731_1_%25282%2529.jpg",
      "name": "장군이네밥집",
      "address": "강원 춘천시 신흥길 8",
      "coords": {
        "lat": 37.8998794,
        "lng": 127.7279859
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "반찬이 잘 나와요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190110_230%2F1547047980241jSpQP_JPEG%2FtZFDp8vpkRceyPc26wo-TZY1.jpg",
      "name": "원조신토불이",
      "address": "강원 춘천시 우석로85번길 20-9",
      "coords": {
        "lat": 37.8671482,
        "lng": 127.755025
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "반찬이 잘 나와요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220803_294%2F16595177312941d7Gn_PNG%2F1.png",
      "name": "순이네불쭈꾸미&닭볶음탕",
      "address": "강원 춘천시 우묵길70번길 13 1층",
      "coords": {
        "lat": 37.8665162,
        "lng": 127.7243459
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "매장이 넓어요",
        "친절해요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190117_233%2F1547705481431o0odL_JPEG%2FO7hquZJ8Szu1H8BW9zhq74Ik.jpg",
      "name": "큰댁돌솥밥",
      "address": "강원 춘천시 삭주로206번길 3 큰댁",
      "coords": {
        "lat": 37.8867632,
        "lng": 127.7532538
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "친절해요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1348025292/home",
      "name": "행복한밥집",
      "address": "강원 춘천시 춘천로 345",
      "coords": {
        "lat": 37.8845202,
        "lng": 127.7490238
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231109_202%2F1699514764417JRndO_JPEG%2Ftemp_file.jpg",
      "name": "윤이네목살찜",
      "address": "강원 춘천시 춘주로187번길 20-6 1층",
      "coords": {
        "lat": 37.8608618,
        "lng": 127.7261657
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "혼밥하기 좋아요",
        "가성비가 좋아요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170530_242%2F1496120869600gcFQB_JPEG%2F4.jpg",
      "name": "안가네밥집",
      "address": "강원 춘천시 남춘로25번길 4-1",
      "coords": {
        "lat": 37.8636937,
        "lng": 127.730634
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220204_52%2F16439840680784jBQe_JPEG%2F3013A26A-FE49-434A-AF80-EF176AE1A2AF.jpeg",
      "name": "내고향풍천장어",
      "address": "강원 춘천시 남면 소주고개로 111 1층",
      "coords": {
        "lat": 37.7471747,
        "lng": 127.6204238
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "매장이 넓어요",
        "주차하기 편해요",
        "단체모임 하기 좋아요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230717_236%2F1689571312265lG3Gv_JPEG%2FIMG_5959.JPG",
      "name": "동강막국수",
      "address": "강원 춘천시 사북면 사내천로 1173",
      "coords": {
        "lat": 38.0494674,
        "lng": 127.6090654
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "주차하기 편해요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240208_66%2F1707381434949BITW6_JPEG%2FKakaoTalk_20240208_115117664_01.jpg",
      "name": "정갈한 우동가게",
      "address": "강원 춘천시 우두1길 29 101호, 102호",
      "coords": {
        "lat": 37.9096267,
        "lng": 127.7366806
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1080743420/home",
      "name": "시골밥집",
      "address": "강원 춘천시 춘천로310번길 23",
      "coords": {
        "lat": 37.8802888,
        "lng": 127.7466399
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "친절해요",
        "반찬이 잘 나와요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190909_59%2F1567985170589u4XA0_JPEG%2FPLcwZX0yvHhR6GrgYWOvxgx6.jpg",
      "name": "소양강먹촌",
      "address": "강원 춘천시 상천3길 4",
      "coords": {
        "lat": 37.9329025,
        "lng": 127.7925533
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "친절해요",
        "가성비가 좋아요",
        "반찬이 잘 나와요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220908_294%2F1662606641244oPC6R_JPEG%2F1662606609791.jpg",
      "name": "만천리 한우마을밥집",
      "address": "강원 춘천시 후석로420번길 7 B108",
      "coords": {
        "lat": 37.8878943,
        "lng": 127.7450934
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190126_198%2F15485087447059EAUi_JPEG%2F9MBE7XhEFq1trItfyV85OYQT.jpg",
      "name": "돈",
      "address": "강원 춘천시 신흥길 9-1",
      "coords": {
        "lat": 37.900123,
        "lng": 127.727786
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161010_266%2F1476027022478TN6FR_JPEG%2F176960406041797_0.jpeg",
      "name": "미미한식",
      "address": "강원 춘천시 애막골길3번길 10 1층",
      "coords": {
        "lat": 37.8659196,
        "lng": 127.7507517
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "친절해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1679550989/home",
      "name": "청수",
      "address": "강원 춘천시 신북읍 영서로 3294",
      "coords": {
        "lat": 37.94252290000001,
        "lng": 127.7114192
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "반찬이 잘 나와요",
        "재료가 신선해요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231110_15%2F1699589190040LSva7_JPEG%2FKakaoTalk_20230922_125112468_26.jpg",
      "name": "달래해장 춘천애막골점",
      "address": "강원 춘천시 우석로67번길 15 1층",
      "coords": {
        "lat": 37.8654251,
        "lng": 127.7511102
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230503_212%2F1683117666965tEnE3_JPEG%2F6FCC28BE-1614-4303-AA7C-751A66E27142.jpeg",
      "name": "먹보정식",
      "address": "강원 춘천시 우석로 6 1층",
      "coords": {
        "lat": 37.8619906,
        "lng": 127.7464811
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "매장이 청결해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211130_184%2F1638276994928d9Hbb_JPEG%2FPslnJn-4QTLFkJGy0pYbTxnC.jpg",
      "name": "푸드엠에이",
      "address": "강원 춘천시 백령로 25",
      "coords": {
        "lat": 37.8665832,
        "lng": 127.7375324
      },
      "region": "춘천",
      "keywords": [
        "혼밥하기 좋아요",
        "음식이 맛있어요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180420_15%2F1524216299968hMEMH_JPEG%2Fh_5TB6d_ZaD15r20DlYhQzTc.jpg",
      "name": "황가네밥집",
      "address": "강원 춘천시 동내면 원창고개길 285",
      "coords": {
        "lat": 37.8330713,
        "lng": 127.7617831
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "혼밥하기 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220918_211%2F1663471826771CrIBf_JPEG%2F9FC82B39-ED37-41BC-8431-8EFF92EF5F85.jpeg",
      "name": "윤가식당",
      "address": "강원 춘천시 남산면 강촌로 111 1층",
      "coords": {
        "lat": 37.8095674,
        "lng": 127.6365077
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요",
        "반찬이 잘 나와요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221204_209%2F1670147500206PRMsF_JPEG%2F3CD7830E-9D72-4AF4-AB20-9E96D455C0D7.jpeg",
      "name": "온의교집 춘천본점",
      "address": "강원 춘천시 방송길 70 온의롯데캐슬아파트상가 117동 122호",
      "coords": {
        "lat": 37.869285,
        "lng": 127.718559
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "매장이 청결해요",
        "메뉴 구성이 알차요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230718_90%2F1689656359018On2yg_JPEG%2F20230701_153218.jpg",
      "name": "밥한끼셀프밥집",
      "address": "강원 춘천시 후석로 365",
      "coords": {
        "lat": 37.8831232,
        "lng": 127.7476374
      },
      "region": "춘천",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "재료가 신선해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },

    //강릉

    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230710_16%2F1688953603602zhCX5_PNG%2F1.png",
      "name": "제순식당 강릉강릉방향휴게소점",
      "address": "강원 강릉시 성산면 영동고속도로 232",
      "coords": {
        "lat": 37,
        "lng": 128
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "혼밥하기 좋아요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240206_244%2F1707212079889CSeLV_JPEG%2FKakaoTalk_20231211_190909791_02.jpg",
      "name": "목구멍 강릉점",
      "address": "강원 강릉시 솔올로 61 1층 101호",
      "coords": {
        "lat": 37.767353,
        "lng": 128.8784657
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "고기 질이 좋아요",
        "친절해요",
        "직접 잘 구워줘요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230309_79%2F1678345098473gPNLS_JPEG%2FKakaoTalk_20230309_151155844_06.jpg",
      "name": "정동진쌈밥장칼국수",
      "address": "강원 강릉시 강동면 헌화로 906-3 가동 1층",
      "coords": {
        "lat": 37.6918842,
        "lng": 129.0213872
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "매장이 넓어요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f640_380&amp;src=http%3A%2F%2Fblogfiles.naver.net%2F20160614_104%2Fjasmin7141_1465886454197eJEXc_JPEG%2FNaverBlog_20160614_154053_15.jpg%23480x360",
      "name": "정동진심곡쉼터",
      "address": "강원 강릉시 강동면 헌화로 665-6",
      "coords": {
        "lat": 37.6648476,
        "lng": 129.0504231
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200116_202%2F1579171524957tBGBO_JPEG%2FQ56XzH_XRaTk7zavi7nV1qhJ.jpg",
      "name": "원조식당",
      "address": "강원 강릉시 임영로155번길 7-1 1층",
      "coords": {
        "lat": 37.7547871,
        "lng": 128.8909535
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230214_188%2F1676355484633sjvtB_JPEG%2FKakaoTalk_20230214_151649293.jpg",
      "name": "일품양평해장국 강릉강문점",
      "address": "강원 강릉시 해안로 362",
      "coords": {
        "lat": 37.7954956,
        "lng": 128.9140463
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_95%2F1567155618894YCbAN_JPEG%2F-lEIYj8WODs4e6CCY-tSPjRx.jpg",
      "name": "임꺽정쌀보리밥뷔페 강릉점",
      "address": "강원 강릉시 금성로 29 2층",
      "coords": {
        "lat": 37.7534988,
        "lng": 128.8974578
      },
      "region": "강릉",
      "keywords": [
        "가성비가 좋아요",
        "혼밥하기 좋아요",
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/21734578/home",
      "name": "아리랑식당",
      "address": "강원 강릉시 미노길 69-1",
      "coords": {
        "lat": 37.8238736,
        "lng": 128.8489812
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "양이 많아요",
        "주차하기 편해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180109_92%2F1515478528265SPQeJ_JPEG%2FQqWcRyDjiWPUE84vB2729TG9.jpg",
      "name": "주영식당",
      "address": "강원 강릉시 금성로 21 중앙시장 2층 12-13호",
      "coords": {
        "lat": 37.7539833,
        "lng": 128.8985663
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "특별한 메뉴가 있어요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180716_47%2F1531726131976aAL6y_JPEG%2FgCX2I_yMhO03AyMYEx8BqYuM.jpeg.jpg",
      "name": "정감",
      "address": "강원 강릉시 가작로 34 정감",
      "coords": {
        "lat": 37.7690212,
        "lng": 128.8794967
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "인테리어가 멋져요",
        "재료가 신선해요",
        "특별한 날 가기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231218_42%2F1702876951877yEJXI_JPEG%2F%25B2%25D9%25B9%25CC%25B1%25E2AAA00228.JPG",
      "name": "강릉초당콩감자탕",
      "address": "강원 강릉시 초당순두부길 3 1층 강릉초당콩감자탕",
      "coords": {
        "lat": 37.7887162,
        "lng": 128.9091655
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "특별한 메뉴가 있어요",
        "친절해요",
        "양이 많아요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200929_133%2F1601341623785sm87B_JPEG%2Fd8S21RDEckwYIjt2ejo3F01-.jpg",
      "name": "정동맛집 산채백반식당",
      "address": "강원 강릉시 강동면 헌화로 1094 지하1층",
      "coords": {
        "lat": 37.6905782,
        "lng": 129.0321603
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "반찬이 잘 나와요",
        "친절해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_31%2F1567154596420dVELO_JPEG%2F4L1ENjJZGmpRctgOhIJaABgI.jpg",
      "name": "김부자국밥",
      "address": "강원 강릉시 범일로579번길 21 1층",
      "coords": {
        "lat": 37.7382735,
        "lng": 128.8786094
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "혼밥하기 좋아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_208%2F1567143770882wRDYW_JPEG%2Fauk7k6MY6lU5s50GgTket8Vc.jpg",
      "name": "제주맛자랑",
      "address": "강원 강릉시 임영로155번길 6 5호, 1층(서부시장)",
      "coords": {
        "lat": 37.7550872,
        "lng": 128.890803
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220825_257%2F1661420662548vQ1gN_JPEG%2FIMG_20220824_191709_309.jpg",
      "name": "예당",
      "address": "강원 강릉시 성덕로 97",
      "coords": {
        "lat": 37.7583858,
        "lng": 128.9278551
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "매장이 청결해요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_190%2F15674927689280rGAY_JPEG%2FSkpPRyznbj0vJ1XFyC7i0SxP.jpg",
      "name": "돈까스 맛있는집",
      "address": "강원 강릉시 하평길 30",
      "coords": {
        "lat": 37.7702355,
        "lng": 128.9118537
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "혼밥하기 좋아요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190128_232%2F1548655832201DiYkB_JPEG%2FZgsToBNkvPQ_K-ABb87YVQTY.jpg",
      "name": "강릉청국장",
      "address": "강원 강릉시 초당순두부길55번길 14-5",
      "coords": {
        "lat": 37.7899506,
        "lng": 128.9144405
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "친절해요",
        "재료가 신선해요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240123_252%2F1705969421107vYDk0_PNG%2F%25B0%25A1%25B8%25B6%25BC%25DC%25BC%25F8%25B4%25EB%25B1%25B9%25B9%25E4_%25B3%25D7%25C0%25CC%25B9%25F6%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA_%25B0%25F8%25C5%25EB_%25C0%25CC%25B9%25CC%25C1%25F6.png",
      "name": "가마솥순대국밥 강릉포남점",
      "address": "강원 강릉시 하평1길 20",
      "coords": {
        "lat": 37.7716694,
        "lng": 128.9120149
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "매장이 넓어요",
        "친절해요",
        "매장이 청결해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_198%2F1567145107310MGUEm_JPEG%2F2kTuyzbAA0LG2La9X6ylNBjL.jpg",
      "name": "장수김밥",
      "address": "강원 강릉시 임영로 149",
      "coords": {
        "lat": 37.7546079,
        "lng": 128.8916414
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "친절해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230607_249%2F1686106253928d2LmH_JPEG%2FKakaoTalk_20230607_114147190.jpg",
      "name": "고향마을숯불돼지갈비",
      "address": "강원 강릉시 성덕포남로182번길 42 강릉역 근처",
      "coords": {
        "lat": 37.76981749999999,
        "lng": 128.9130095
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "고기 질이 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_238%2F1567500088958iXJfv_JPEG%2FLGO877qntBMg9af_LpE1RhZy.jpg",
      "name": "포남사골옹심이",
      "address": "강원 강릉시 남구길10번길 11",
      "coords": {
        "lat": 37.7649895,
        "lng": 128.9073716
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "특별한 메뉴가 있어요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231115_111%2F1700027740345m7AQi_JPEG%2F3.jpg",
      "name": "강릉꼬막비빔밥 풍호맛뜨락",
      "address": "강원 강릉시 임영로 10 강릉꼬막비빔밥 풍호맛뜨락",
      "coords": {
        "lat": 37.7432488,
        "lng": 128.8967486
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "매장이 넓어요",
        "친절해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1875034085/home",
      "name": "엄니밥집",
      "address": "강원 강릉시 사천면 방동길 43",
      "coords": {
        "lat": 37.8172417,
        "lng": 128.8557372
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "혼밥하기 좋아요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210530_276%2F1622371229743FIItD_JPEG%2Ffc2ngOc7__RzJ9mX3a_jRj3P.jpg",
      "name": "강촌제주산흑돼지",
      "address": "강원 강릉시 용지각길8번길 1",
      "coords": {
        "lat": 37.7606856,
        "lng": 128.9049792
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_210%2F1567491164434rQuus_JPEG%2Frx2TmCzTjfsi3rvn2luw5cPR.jpg",
      "name": "밥톨",
      "address": "강원 강릉시 관대길29번길 29-8",
      "coords": {
        "lat": 37.7390159,
        "lng": 128.8769997
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "양이 많아요",
        "친절해요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200122_128%2F15796578941543sEFw_JPEG%2F3RMlcYQVGFVo3cectxZS8wI5.jpeg.jpg",
      "name": "연곡꾹저구탕",
      "address": "강원 강릉시 연곡면 진고개로 2679 진고개로 2679",
      "coords": {
        "lat": 37.8586256,
        "lng": 128.8319673
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "특별한 메뉴가 있어요",
        "친절해요",
        "양이 많아요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_182%2F1567154107092SrGlA_JPEG%2FvDq457xqd5mHjrW9MWTVLQng.jpg",
      "name": "소문난식당",
      "address": "강원 강릉시 금성로 21 중앙시장 2층 6호",
      "coords": {
        "lat": 37.75402130000001,
        "lng": 128.8986219
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "단체모임 하기 좋아요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200618_233%2F1592439485190gATBL_JPEG%2FdBwd1tUFIYw6LYI7PfqQ7fbu.jpg",
      "name": "포남신숯불구이",
      "address": "강원 강릉시 경강로 2267",
      "coords": {
        "lat": 37.7659511,
        "lng": 128.9096891
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231022_283%2F1697982946741J2vP6_JPEG%2F20231014120058.jpg",
      "name": "개스토랑in위촌길299",
      "address": "강원 강릉시 성산면 위촌길 299 개스토랑",
      "coords": {
        "lat": 37.7594112,
        "lng": 128.8363413
      },
      "region": "강릉",
      "keywords": [
        "친절해요",
        "음식이 맛있어요",
        "주차하기 편해요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20181230_53%2F1546157116570QRavK_JPEG%2FcxcmYWY2yHdtm8NRb2_dZJCL.jpg",
      "name": "엄마가차려주는밥상",
      "address": "강원 강릉시 강동면 율곡로 2189 엄마가 차려주는 밥상",
      "coords": {
        "lat": 37.7270286,
        "lng": 128.954253
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "반찬이 잘 나와요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230402_91%2F1680417245094TSPlO_JPEG%2FKakaoTalk_20230402_153210879.jpg",
      "name": "엔조이락 일송점",
      "address": "강원 강릉시 하평3길 30",
      "coords": {
        "lat": 37.7718091,
        "lng": 128.9158964
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "기본 안주가 좋아요",
        "술이 다양해요",
        "가성비가 좋아요",
        "혼술하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230719_118%2F1689748083979Ycd76_JPEG%2FKakaoTalk_20230719_125314628.jpg",
      "name": "일품양평해장국 강릉입암점",
      "address": "강원 강릉시 성덕로 328-18 108호",
      "coords": {
        "lat": 37.7547251,
        "lng": 128.9198856
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_44%2F1567492254343ynf1J_JPEG%2Fkyw-cTjPomF03o4O6qp43EUk.jpg",
      "name": "춘천유정닭갈비",
      "address": "강원 강릉시 성덕포남로174번길 35-1",
      "coords": {
        "lat": 37.7694476,
        "lng": 128.9128589
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "매장이 넓어요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201126_131%2F1606376902678plB7j_JPEG%2FMpMtJpfwm5eFygN3uH6wNA6k.jpg",
      "name": "밥집앤생삼겹",
      "address": "강원 강릉시 성덕로 316-11 밥집앤 생삼겹",
      "coords": {
        "lat": 37.7548559,
        "lng": 128.9210275
      },
      "region": "강릉",
      "keywords": [
        "혼밥하기 좋아요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_21%2F1567499601470tBYDH_JPEG%2FE_GUnra-b-gA1ozryCgK6YH6.jpg",
      "name": "해촌해물삼계탕",
      "address": "강원 강릉시 경강로2245번길 28",
      "coords": {
        "lat": 37.76608700000001,
        "lng": 128.9059432
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230112_43%2F1673498201094is8oe_JPEG%2FIMG_0023.jpg",
      "name": "강릉짬뽕순두부 성우회관",
      "address": "강원 강릉시 주문진읍 해안로 1613 1층",
      "coords": {
        "lat": 37.8798018,
        "lng": 128.8331419
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "뷰가 좋아요",
        "매장이 청결해요",
        "친절해요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1169540571/home",
      "name": "윤식당",
      "address": "강원 강릉시 주문진읍 매맥이아랫길 24 동방타워맨션",
      "coords": {
        "lat": 37.876062,
        "lng": 128.82657
      },
      "region": "강릉",
      "keywords": [
        "-"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/32035160/home",
      "name": "김가네가정식백반",
      "address": "강원 강릉시 강중길 4",
      "coords": {
        "lat": 37.7525061,
        "lng": 128.9054979
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "반찬이 잘 나와요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200818_116%2F1597740299610x5qGm_JPEG%2Frn9Hs21SVJH2BSOXtDA9cwlp.jpg",
      "name": "정동진밥집",
      "address": "강원 강릉시 강동면 정동3길 46",
      "coords": {
        "lat": 37.6860991,
        "lng": 129.0359674
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230828_138%2F16931811937136zt0o_JPEG%2FIMG_4597.JPG",
      "name": "강릉감자옹심 강릉본점",
      "address": "강원 강릉시 토성로 171",
      "coords": {
        "lat": 37.7564701,
        "lng": 128.8948902
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "특별한 메뉴가 있어요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/60393573/home",
      "name": "강릉과학산업진흥구내식당",
      "address": "강원 강릉시 과학단지로 106-11",
      "coords": {
        "lat": 37.8032828,
        "lng": 128.8548786
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "반찬이 잘 나와요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_91%2F1567155572880eqJgt_JPEG%2FEQV7fMfLpYu0v6mowk1xTM3A.jpg",
      "name": "백두네 등장",
      "address": "강원 강릉시 관대길15번길 11",
      "coords": {
        "lat": 37.7392248,
        "lng": 128.8792599
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_277%2F1567493102570D3QXJ_JPEG%2FlT5_tfQx4_z5i9VpB6sE-Gzd.jpg",
      "name": "국밥가",
      "address": "강원 강릉시 성덕포남로188번길 25",
      "coords": {
        "lat": 37.7698685,
        "lng": 128.9108478
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "친절해요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_48%2F1567499163555C4WfM_JPEG%2FcRakHuDI6KJcXvDPJK9QH5cR.jpg",
      "name": "한성먹거리",
      "address": "강원 강릉시 남구길30번길 11",
      "coords": {
        "lat": 37.766318,
        "lng": 128.9056473
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231206_203%2F1701850483365s0m1d_JPEG%2Ftemp_file.jpg",
      "name": "쓰이네",
      "address": "강원 강릉시 용지로 118 1층 쓰이네",
      "coords": {
        "lat": 37.7599713,
        "lng": 128.9045432
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "특별한 메뉴가 있어요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211027_89%2F1635330107386otU7y_JPEG%2FX4RmMwiBLr5xvPI0C0uO-Lpd.jpg",
      "name": "강릉밥선생",
      "address": "강원 강릉시 옥천로 72",
      "coords": {
        "lat": 37.7601898,
        "lng": 128.8982563
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230809_98%2F1691568282563acQp7_JPEG%2F313518383_4307085769476264_8006076666138105279_n.jpg",
      "name": "후토",
      "address": "강원 강릉시 보래미길 24 2층 후토",
      "coords": {
        "lat": 37.7720898,
        "lng": 128.9086892
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "특별한 메뉴가 있어요",
        "친절해요",
        "인테리어가 멋져요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_168%2F15674938511672rUOc_JPEG%2Fr0BVGszDs5UnknWqC8OPU3yR.jpg",
      "name": "냉면집",
      "address": "강원 강릉시 성덕포남로182번길 17",
      "coords": {
        "lat": 37.7689364,
        "lng": 128.9102308
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "가성비가 좋아요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_276%2F1567491778035xjPOR_JPEG%2FYTkQhFQ3iuyD6qMdUbc2bUGe.jpg",
      "name": "뼈장군",
      "address": "강원 강릉시 관대길15번길 10",
      "coords": {
        "lat": 37.7392307,
        "lng": 128.8789213
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "양이 많아요",
        "친절해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240318_8%2F1710688279523bCy17_JPEG%2FSNOW_20240317_175706_977.jpg",
      "name": "솔담편백찜 강릉교동점",
      "address": "강원 강릉시 솔올로 41 1층",
      "coords": {
        "lat": 37.7657203,
        "lng": 128.8780105
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요",
        "메뉴 구성이 알차요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230716_88%2F1689495947883uIP77_JPEG%2F906C0454-1950-4709-9A2A-1F191D8E8F0F.jpeg",
      "name": "천일식당",
      "address": "강원 강릉시 옥천로61번길 6 1층",
      "coords": {
        "lat": 37.7593519,
        "lng": 128.8987941
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "친절해요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_106%2F1567143009512fm1J3_JPEG%2FuTBpGHddVAu27-1B2x9BNKlS.jpg",
      "name": "연지식당",
      "address": "강원 강릉시 임영로155번길 6 38,40호, 1층(서부시장)",
      "coords": {
        "lat": 37.7550872,
        "lng": 128.890803
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "주차하기 편해요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230616_265%2F16868801095037UoBm_JPEG%2F%25C1%25A6%25BC%25F8%25BD%25C4%25B4%25E7_%25C5%25B0%25BF%25C0%25BD%25BA%25C5%25A9_%25B8%25DE%25C0%25CE%2528%25B4%25EB%25C7%25A5%25B4%25D4%2529_1080x1920px_%25C8%25AE%25C0%25CE%25BF%25EB.jpg",
      "name": "제순식당 강릉인천방향휴게소점",
      "address": "강원 강릉시 성산면 영동고속도로 231",
      "coords": {
        "lat": 37.7593104,
        "lng": 128.8051586
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "양이 많아요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1500687203/home",
      "name": "이모네야식",
      "address": "강원 강릉시 주문진읍 주문로 149",
      "coords": {
        "lat": 37.8954592,
        "lng": 128.8310571
      },
      "region": "강릉",
      "keywords": [
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230512_10%2F1683874262680wy74y_JPEG%2FScreenshot_20230512_130307.jpg",
      "name": "거기",
      "address": "강원 강릉시 금성로23번길 4-5",
      "coords": {
        "lat": 37.7535786,
        "lng": 128.8980381
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "특별한 메뉴가 있어요",
        "친절해요",
        "가성비가 좋아요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240202_276%2F1706868080004mpzVp_JPEG%2F1000006288.jpg",
      "name": "바다수퍼해물천하조개구이 유천교동점",
      "address": "강원 강릉시 선수촌로 73 105호 205호",
      "coords": {
        "lat": 37.7575353,
        "lng": 128.8700286
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "양이 많아요",
        "인테리어가 멋져요",
        "단체모임 하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190905_6%2F1567650128085V40RB_JPEG%2FoViQxP8JFCPgZ2ISL9jXO0dq.jpg",
      "name": "오솔길식당",
      "address": "강원 강릉시 토성로123번길 3",
      "coords": {
        "lat": 37.7542973,
        "lng": 128.8901926
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "양이 많아요",
        "친절해요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_32%2F1567498505333CK66L_JPEG%2Fr19y8bEHUlut2kOURG4Y3UDe.jpg",
      "name": "동산항물회",
      "address": "강원 강릉시 경강로2267번길 22 1층",
      "coords": {
        "lat": 37.7671827,
        "lng": 128.9080675
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20181031_42%2F1540962216751VBmdm_JPEG%2F6QxJDXa166Tnirk0PdYced_z.jpg",
      "name": "큰집추어탕",
      "address": "강원 강릉시 임영로155번길 6 42호, 1층(서부시장)",
      "coords": {
        "lat": 37.7550872,
        "lng": 128.890803
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "주차하기 편해요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_231%2F1567495899805UVNEt_JPEG%2FeC2XcO0d_dJ7ucpQNU4aXTBQ.jpg",
      "name": "언덕위에일번지",
      "address": "강원 강릉시 성덕포남로182번길 7",
      "coords": {
        "lat": 37.7685873,
        "lng": 128.9094847
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "가성비가 좋아요",
        "양이 많아요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1348364525/home",
      "name": "한끼밥집",
      "address": "강원 강릉시 창해로14번길 22-1",
      "coords": {
        "lat": 37.7724539,
        "lng": 128.9473894
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221103_13%2F1667441938765gkwbc_JPEG%2F%25B0%25A1%25C0%25DA%25B9%25CC%25C1%25B6%25B8%25B2.JPG",
      "name": "양지가자미",
      "address": "강원 강릉시 토성로 192",
      "coords": {
        "lat": 37.7573475,
        "lng": 128.8968273
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_278%2F1567152657355XFBqB_JPEG%2Frr2P8wkkf9RLshOVElWYqfWW.jpg",
      "name": "성남장터",
      "address": "강원 강릉시 중앙시장길 13 , 2층",
      "coords": {
        "lat": 37.7534226,
        "lng": 128.8978645
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "혼밥하기 좋아요",
        "양이 많아요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_34%2F15671444542233fYzC_JPEG%2FoOyQuRMCDW5vsh79TgwIqX5R.jpg",
      "name": "문화식당",
      "address": "강원 강릉시 토성로123번길 6",
      "coords": {
        "lat": 37.7545134,
        "lng": 128.8903907
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "친절해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200507_152%2F15888472568716IkMx_JPEG%2FrPrUTV0ldl4TeqkbCI0WVMGL.jpg",
      "name": "성산밥집",
      "address": "강원 강릉시 성산면 구산길 49 성산밥집",
      "coords": {
        "lat": 37.7161457,
        "lng": 128.8315233
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_164%2F1567153084745UIPNv_JPEG%2F2ABRSPCUiZmvK-ifaypxysFy.jpg",
      "name": "불개미식당",
      "address": "강원 강릉시 중앙시장1길 8",
      "coords": {
        "lat": 37.753134,
        "lng": 128.8984374
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_10%2F1567494049673bCJfG_JPEG%2FptT1XpeGvnCE3qXrfIJoJpoP.jpg",
      "name": "다원식당",
      "address": "강원 강릉시 경강로2291번길 24",
      "coords": {
        "lat": 37.7688779,
        "lng": 128.910804
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210517_63%2F1621217858349Hlrvc_JPEG%2Fei8043WgjGxSsnCWICCooJL8.jpg",
      "name": "푸짐한감자탕",
      "address": "강원 강릉시 강릉대로 369-5",
      "coords": {
        "lat": 37.7682126,
        "lng": 128.9063771
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201203_137%2F1606984385407nMiM2_JPEG%2FsvtROBr00zEU9OmiczCBh_oH.jpeg.jpg",
      "name": "소담낙지 강릉경포",
      "address": "강원 강릉시 경포로 489-10 1층",
      "coords": {
        "lat": 37.8039403,
        "lng": 128.9042405
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "매장이 청결해요",
        "반찬이 잘 나와요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201028_173%2F1603862031024SAkXe_JPEG%2FakQzW8XTBqKA5g1rjGB_FW6z.jpg",
      "name": "만억정흑염소 모전점",
      "address": "강원 강릉시 강동면 둔지길 58",
      "coords": {
        "lat": 37.7189115,
        "lng": 128.9566369
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "매장이 청결해요",
        "재료가 신선해요",
        "특별한 날 가기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_210%2F1567150765169XrIW1_JPEG%2F3ML_INjw8hNwbXzcd_kFf0UQ.jpg",
      "name": "육개본가",
      "address": "강원 강릉시 금성로 21 중앙시장 2층 43-2호",
      "coords": {
        "lat": 37.75402130000001,
        "lng": 128.8986219
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210215_56%2F1613328485672riIg3_JPEG%2FosfqrvltZnyOr3LoTpD3hzRU.jpg",
      "name": "추억의맛집",
      "address": "강원 강릉시 옥가로7번길 14",
      "coords": {
        "lat": 37.7582816,
        "lng": 128.8977432
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200409_194%2F1586410517929Hx8A8_JPEG%2FHWnlzvIGGcD14eK8MsAfcRFh.jpg",
      "name": "강릉대관령감자옹심이",
      "address": "강원 강릉시 하평길 6",
      "coords": {
        "lat": 37.7695454,
        "lng": 128.909498
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "특별한 메뉴가 있어요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_238%2F15674955847250IMuz_JPEG%2F9gmf25UScwUIFAS1A457AvJu.jpg",
      "name": "신행복식당",
      "address": "강원 강릉시 경강로2291번길 4",
      "coords": {
        "lat": 37.7673265,
        "lng": 128.9118921
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_90%2F1567498005391tbzPe_JPEG%2FLV9IGl9OOqkaoSXt4XBb2BrR.jpg",
      "name": "산두꺼비",
      "address": "강원 강릉시 남구길18번길 36",
      "coords": {
        "lat": 37.7669135,
        "lng": 128.9087536
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "친절해요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_254%2F1567492519893hqscc_JPEG%2FLCQ7Oy0oLbBMVuZQ6RUBgvG-.jpg",
      "name": "MoMo김밥",
      "address": "강원 강릉시 성덕포남로174번길 35",
      "coords": {
        "lat": 37.7693897,
        "lng": 128.9127352
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_272%2F1567500418334aW6Js_JPEG%2FHGlvo2tEllaUsAfJeyANzGbI.jpg",
      "name": "황제반점",
      "address": "강원 강릉시 경강로2255번길 5",
      "coords": {
        "lat": 37.7652725,
        "lng": 128.9084214
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "혼밥하기 좋아요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230504_164%2F1683163710970oaz3a_JPEG%2F20230502_152506.jpg",
      "name": "경포한우",
      "address": "강원 강릉시 성곡고양길5번안길 15",
      "coords": {
        "lat": 37.7786797,
        "lng": 128.8891285
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "가성비가 좋아요",
        "친절해요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240315_129%2F1710467279374q8tOr_JPEG%2FIMG_5948.jpeg",
      "name": "갑진정식",
      "address": "강원 강릉시 강릉대로 337-5 동도센트리움 상가 101동 108호",
      "coords": {
        "lat": 37.7660767,
        "lng": 128.9035084
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "양이 많아요",
        "메뉴 구성이 알차요",
        "반찬이 잘 나와요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221118_294%2F1668744642908fAHfU_JPEG%2FKakaoTalk_20221118_130556305.jpg",
      "name": "집밥생각",
      "address": "강원 강릉시 원대로 27 집밥생각",
      "coords": {
        "lat": 37.757161,
        "lng": 128.8814897
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230404_17%2F1680571368820H73yI_PNG%2F2.png",
      "name": "챙길 밥 강릉점",
      "address": "강원 강릉시 가작로 173",
      "coords": {
        "lat": 37.7701611,
        "lng": 128.8942477
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "양이 많아요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180908_89%2F1536392564902dnozW_JPEG%2FQUmY-1gd8GvbxXMFvsHvTFXq.jpeg.jpg",
      "name": "더팍스",
      "address": "강원 강릉시 토성로 190",
      "coords": {
        "lat": 37.7572318,
        "lng": 128.8967081
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "매장이 청결해요",
        "가성비가 좋아요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_7%2F1567143101444az7F4_JPEG%2FWicEWW0hOkNqyQVNDAA3_a2c.jpg",
      "name": "서부식당",
      "address": "강원 강릉시 임영로155번길 6 35호, 1층(서부시장)",
      "coords": {
        "lat": 37.7550872,
        "lng": 128.890803
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "주차하기 편해요",
        "가성비가 좋아요",
        "양이 많아요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231125_192%2F17008512198205myu3_JPEG%2F20231120_100043.jpg",
      "name": "인연밥집",
      "address": "강원 강릉시 하슬라로177번길 11 1층",
      "coords": {
        "lat": 37.7665791,
        "lng": 128.8746688
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230703_182%2F1688379361846f9Ehe_JPEG%2FIMG_9384.jpg",
      "name": "여왕개미식당",
      "address": "강원 강릉시 금성로23번길 4 여왕개미식당",
      "coords": {
        "lat": 37.7537255,
        "lng": 128.8980355
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1105055080/home",
      "name": "춘자네밥집",
      "address": "강원 강릉시 강동면 헌화로 1084",
      "coords": {
        "lat": 37.6895069,
        "lng": 129.0324476
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "혼밥하기 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_89%2F1567497337013I4eVH_JPEG%2F7pbT74RQp8PXsYqgRieNNUCX.jpg",
      "name": "해동식당",
      "address": "강원 강릉시 남구길18번길 39",
      "coords": {
        "lat": 37.7673344,
        "lng": 128.9087465
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "반찬이 잘 나와요",
        "친절해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220825_229%2F1661405856038aaChm_JPEG%2F657A6795.JPG",
      "name": "태봉식당",
      "address": "강원 강릉시 정원로 77-10",
      "coords": {
        "lat": 37.7620284,
        "lng": 128.8727703
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_210%2F16988818110749InxJ_JPEG%2F1000001054.jpg",
      "name": "만타스시31 강릉점",
      "address": "강원 강릉시 금성로 7 1층 만타스시",
      "coords": {
        "lat": 37.7546804,
        "lng": 128.8996016
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "양이 많아요",
        "재료가 신선해요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_218%2F1567499831661Whv4e_JPEG%2FeGH8wTBgt5Jm9wD7zmIKRk7z.jpg",
      "name": "중턱마을이가네",
      "address": "강원 강릉시 남구길10번길 10",
      "coords": {
        "lat": 37.7646789,
        "lng": 128.9073463
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "매장이 청결해요",
        "화장실이 깨끗해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1429427138/home",
      "name": "밥집누나",
      "address": "강원 강릉시 용지로 51-1",
      "coords": {
        "lat": 37.7557981,
        "lng": 128.9097083
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "매장이 청결해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210609_184%2F1623239258288RNwhH_JPEG%2Fd2GF1gqGBpaRbbV5s9Qr_p5_.jpg",
      "name": "미가네밥상",
      "address": "강원 강릉시 강동면 율곡로 2202",
      "coords": {
        "lat": 37.7277676,
        "lng": 128.9546371
      },
      "region": "강릉",
      "keywords": [
        "인테리어가 멋져요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210218_258%2F16136430708063VHIS_JPEG%2FcTHCMKLbv7u2x-YYxlc4Tc8l.jpg",
      "name": "몽실네밥집",
      "address": "강원 강릉시 토성로191번길 1",
      "coords": {
        "lat": 37.7575937,
        "lng": 128.8965906
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1016071898/home",
      "name": "노루목",
      "address": "강원 강릉시 연곡면 소금강길 473",
      "coords": {
        "lat": 37.81511,
        "lng": 128.7063636
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "반찬이 잘 나와요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231228_150%2F1703740772818bVmVr_JPEG%2F1703740719104.jpg",
      "name": "포남밥집",
      "address": "강원 강릉시 성덕포남로174번길 18 포남밥집",
      "coords": {
        "lat": 37.7684006,
        "lng": 128.9111937
      },
      "region": "강릉",
      "keywords": [
        "-"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230304_106%2F1677916593198AyVfQ_JPEG%2FKakaoTalk_20230304_165435455.jpg",
      "name": "육꼬기",
      "address": "강원 강릉시 성덕로 328-18 111호 육꼬기",
      "coords": {
        "lat": 37.7547251,
        "lng": 128.9198856
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "매장이 청결해요",
        "재료가 신선해요",
        "인테리어가 멋져요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240226_262%2F17089343813904kcgr_JPEG%2F29F5D019-712C-46BC-9AC2-494F01D8A0D5.jpeg",
      "name": "노가니골",
      "address": "강원 강릉시 노가니길 6-1",
      "coords": {
        "lat": 37.749383,
        "lng": 128.8996908
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_113%2F1567497002327lxsVb_JPEG%2FcrKW-VTgONdiJF7fIboE-FyX.jpg",
      "name": "황금돼지주물럭",
      "address": "강원 강릉시 남구길18번길 39",
      "coords": {
        "lat": 37.7673344,
        "lng": 128.9087465
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "반찬이 잘 나와요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_23%2F1567156432176O5rbw_JPEG%2FheqeCAcO3DXtfVbks_R_MXje.jpg",
      "name": "지영이네칼국수",
      "address": "강원 강릉시 중앙시장1길 6",
      "coords": {
        "lat": 37.753075,
        "lng": 128.8983064
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "친절해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/15310156/home",
      "name": "처가집백반",
      "address": "강원 강릉시 옥천로 74",
      "coords": {
        "lat": 37.7603828,
        "lng": 128.8981014
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "반찬이 잘 나와요",
        "혼밥하기 좋아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_24%2F1567493564135VFWsB_JPEG%2FLobIJujQku7wg0xE6Hya6-V5.jpg",
      "name": "산이장칼국수 포남동1호점",
      "address": "강원 강릉시 성덕포남로188번길 18-1",
      "coords": {
        "lat": 37.7692133,
        "lng": 128.9101195
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1921561321/home",
      "name": "어머니밥상",
      "address": "강원 강릉시 헌화로 1096-1",
      "coords": {
        "lat": 37.690799,
        "lng": 129.0319354
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "반찬이 잘 나와요",
        "양이 많아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1408112993/home",
      "name": "빨간보자기밥집",
      "address": "강원 강릉시 산양큰길 8 1층",
      "coords": {
        "lat": 37.7782051,
        "lng": 128.9148396
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "친절해요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_10%2F15671569081320cpgw_JPEG%2FvWaph_TjBaVzY2K_DDpfcC5T.jpg",
      "name": "춘천1번지닭갈비",
      "address": "강원 강릉시 관대길16번길 9",
      "coords": {
        "lat": 37.7406963,
        "lng": 128.8783002
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "직접 잘 구워줘요",
        "고기 질이 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_74%2F1567153790845aB12i_JPEG%2FoSuiJulijmXK7lGqKvYoxy-G.jpg",
      "name": "성남칼국수",
      "address": "강원 강릉시 중앙시장1길 10",
      "coords": {
        "lat": 37.7532969,
        "lng": 128.8988102
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "가성비가 좋아요",
        "혼밥하기 좋아요",
        "친절해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_213%2F1567144062493ypu1l_JPEG%2FEs2JEV1t7MZU80S3C-IXUYCK.jpg",
      "name": "진부식당",
      "address": "강원 강릉시 임영로155번길 6 33호, 1층(서부시장)",
      "coords": {
        "lat": 37.7550872,
        "lng": 128.890803
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "가성비가 좋아요",
        "반찬이 잘 나와요",
        "주차하기 편해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240403_181%2F17121284838897Gz2p_JPEG%2FKakaoTalk_20240403_154512266.jpg",
      "name": "일품양평해장국 강릉회산점",
      "address": "강원 강릉시 회산로385번길 15",
      "coords": {
        "lat": 37.7427961,
        "lng": 128.867517
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "주차하기 편해요",
        "친절해요",
        "양이 많아요",
        "매장이 넓어요"
      ]
    },
    {
      "img": "https://m.place.naver.com/restaurant/1043801406/home",
      "name": "그늘집",
      "address": "강원 강릉시 성덕로 159",
      "coords": {
        "lat": 37.7614252,
        "lng": 128.9362683
      },
      "region": "강릉",
      "keywords": [
        "-"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_251%2F1567500268113t2lY1_JPEG%2FOVupN7VKaw8uQMc3GFVGUHNp.jpg",
      "name": "신촌장칼국수",
      "address": "강원 강릉시 경강로2255번길 8 신촌장칼국수",
      "coords": {
        "lat": 37.7654969,
        "lng": 128.9083682
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "가성비가 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230217_67%2F1676621786513Hqzwx_JPEG%2FKakaoTalk_20230217_170122928.jpg",
      "name": "일품양평해장국 강릉성남점",
      "address": "강원 강릉시 중앙시장3길 23 1층",
      "coords": {
        "lat": 37.7518341,
        "lng": 128.8973051
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "양이 많아요",
        "친절해요",
        "혼밥하기 좋아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_120%2F1567153993376lFSDo_JPEG%2Fupf1jYqw_ZltLExrloV1ODbr.jpg",
      "name": "형분식한식",
      "address": "강원 강릉시 관솔길 97-3",
      "coords": {
        "lat": 37.7388957,
        "lng": 128.8766764
      },
      "region": "강릉",
      "keywords": [
        "양이 많아요",
        "음식이 맛있어요",
        "가성비가 좋아요",
        "친절해요",
        "혼밥하기 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220710_17%2F165743761205539YWq_JPEG%2Fupload_3bb0cd30bf84478ed9f299da208790ba.jpeg",
      "name": "영미네 부침",
      "address": "강원 강릉시 중앙시장1길 15-1 69번 업소 1층공용화장실 앞 택배가능",
      "coords": {
        "lat": 37.7537228,
        "lng": 128.8992765
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_282%2F1567499380315g3kEB_JPEG%2F4-bTcQ6yHZAI0o7kOEDm0Sis.jpg",
      "name": "옥래식당",
      "address": "강원 강릉시 남구길30번길 12",
      "coords": {
        "lat": 37.766183,
        "lng": 128.905873
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "가성비가 좋아요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210730_104%2F1627652321706QJQSN_JPEG%2FcpdRSALHQekA7jVIEJoPr7G9.jpg",
      "name": "은화식당",
      "address": "강원 강릉시 강릉대로313번길 7-8 1층",
      "coords": {
        "lat": 37.76454750000001,
        "lng": 128.9011107
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "매장이 청결해요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230315_21%2F1678855297857tpusT_JPEG%2FKakaoTalk_20230308_095021168.jpg",
      "name": "달래해장 강릉교동점",
      "address": "강원 강릉시 솔올로 64 1층",
      "coords": {
        "lat": 37.7675476,
        "lng": 128.8789329
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "매장이 청결해요",
        "매장이 넓어요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231115_96%2F1700025627671awsar_JPEG%2Ftemp_file.jpg",
      "name": "다연경포밥집",
      "address": "강원 강릉시 경포로475번길 18 1층",
      "coords": {
        "lat": 37.8042385,
        "lng": 128.9022695
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "특별한 메뉴가 있어요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190830_293%2F1567145071957bhOjR_JPEG%2FOxmiApSZeOmy9GVUEHVdssR4.jpg",
      "name": "용강옛날집",
      "address": "강원 강릉시 임영로155번길 6 5호, 1층(서부시장)",
      "coords": {
        "lat": 37.7550872,
        "lng": 128.890803
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230404_122%2F1680585453493xwbaO_JPEG%2FKakaoTalk_20230401_232759787.jpg",
      "name": "옛길가든 화정",
      "address": "강원 강릉시 성산면 대관령옛길 119 옛길가든화정",
      "coords": {
        "lat": 37.71141220000001,
        "lng": 128.7971497
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "가성비가 좋아요",
        "특별한 메뉴가 있어요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190325_292%2F1553481394709Knsdi_JPEG%2FUmHBVRko2rX1t5vwxmnNNBJZ.JPG.jpg",
      "name": "썬한식 정동진 본점",
      "address": "강원 강릉시 강동면 율곡로 1167 썬한식",
      "coords": {
        "lat": 37.6907643,
        "lng": 129.0312256
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220427_102%2F1651040120019BHWfk_JPEG%2FP20220426_150330567_0C0EB2A2-0CF6-4B35-9040-368DD0546B62.jpg",
      "name": "덕이식당",
      "address": "강원 강릉시 강동면 헌화로 1096-1 덕이식당",
      "coords": {
        "lat": 37.690799,
        "lng": 129.0319354
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "재료가 신선해요",
        "양이 많아요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231121_44%2F1700542454241nGqDN_JPEG%2F1B0D5463-A318-4A99-BC03-BC6372A50110.jpeg",
      "name": "순남시래기 강릉점",
      "address": "강원 강릉시 교동광장로100번길 17-3 1층 101호",
      "coords": {
        "lat": 37,
        "lng": 128
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "반찬이 잘 나와요",
        "재료가 신선해요",
        "매장이 청결해요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220802_74%2F1659425555747UHXLV_JPEG%2F1659425516301.jpg",
      "name": "행복한밥집",
      "address": "강원 강릉시 하슬라로232번길 18-4 행복한밥집",
      "coords": {
        "lat": 37.7701935,
        "lng": 128.8776269
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "양이 많아요",
        "재료가 신선해요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190903_230%2F1567497552917ObT9L_JPEG%2Fch5Avadw768dIcAkL7oY7MZc.jpg",
      "name": "미가식당",
      "address": "강원 강릉시 남구길18번길 37 미가식당",
      "coords": {
        "lat": 37.7670672,
        "lng": 128.9086093
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "재료가 신선해요",
        "친절해요",
        "특별한 메뉴가 있어요",
        "가성비가 좋아요"
      ]
    },
    {
      "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220810_121%2F1660109998232meqCz_JPEG%2F9.jpg",
      "name": "진고개냉면",
      "address": "강원 강릉시 연곡면 진고개로 2539",
      "coords": {
        "lat": 37.8554446,
        "lng": 128.8173639
      },
      "region": "강릉",
      "keywords": [
        "음식이 맛있어요",
        "친절해요",
        "주차하기 편해요",
        "가성비가 좋아요",
        "양이 많아요"
      ]
    },

    //평창


    {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150920_63%2F1442741742414koXPO_JPEG%2FSUBMIT_1442741716037_33752632.jpg",
        "name": "하박국",
        "address": "강원 평창군 대화면 대화중앙로 45-2",
        "coords": {
          "lat": 37.4932513,
          "lng": 128.4568887
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "가성비가 좋아요",
          "반찬이 잘 나와요",
          "재료가 신선해요",
          "친절해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161101_159%2F14779845815977Flhp_JPEG%2F177051564640717_0.jpeg",
        "name": "두근두근콩콩",
        "address": "강원 평창군 미탄면 서동로 4149",
        "coords": {
          "lat": 37.3332979,
          "lng": 128.5406369
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "친절해요",
          "특별한 메뉴가 있어요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/1361303461/home",
        "name": "부일식당",
        "address": "강원 평창군 영정게길 12",
        "coords": {
          "lat": 37.6404184,
          "lng": 128.5626267
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "양이 많아요",
          "반찬이 잘 나와요",
          "혼밥하기 좋아요",
          "매장이 넓어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240129_69%2F1706499589737ozMGR_JPEG%2FDSC08542.jpg",
        "name": "숙성장인",
        "address": "강원 평창군 대관령면 솔봉로 296 티롤빌리지내 120, 121호 (광장구역 내)",
        "coords": {
          "lat": 37.6626246,
          "lng": 128.6641813
        },
        "region": "평창",
        "keywords": [
          "고기 질이 좋아요",
          "음식이 맛있어요",
          "매장이 청결해요",
          "친절해요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/1412359849/home",
        "name": "삼삼식당",
        "address": "강원 평창군 대화면 대화2길 10",
        "coords": {
          "lat": 37.4993159,
          "lng": 128.4534056
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "반찬이 잘 나와요",
          "양이 많아요",
          "친절해요",
          "재료가 신선해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230811_244%2F1691730977084wDmRi_JPEG%2Fimage-2541460394042247087.jpg",
        "name": "밥집",
        "address": "강원 평창군 진부면 진부시장안길 6 1층",
        "coords": {
          "lat": 37.6371581,
          "lng": 128.5576334
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "반찬이 잘 나와요",
          "친절해요",
          "가성비가 좋아요",
          "재료가 신선해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230421_210%2F1682055973474MdJQ2_PNG%2F1.png",
        "name": "1997동굴갈비",
        "address": "강원 평창군 봉평면 태기로 323 면온ic에서2km",
        "coords": {
          "lat": 37.5752989,
          "lng": 128.3402431
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "고기 질이 좋아요",
          "매장이 넓어요",
          "친절해요",
          "인테리어가 멋져요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220103_66%2F16411807468672XK2N_JPEG%2F26996EDB-039A-47F2-BA13-F0EC5B0DEC1E.jpeg",
        "name": "쌍둥이네밥집",
        "address": "강원 평창군 용평면 금송길 1",
        "coords": {
          "lat": 37.5853151,
          "lng": 128.4144221
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "재료가 신선해요",
          "가성비가 좋아요",
          "양이 많아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230608_3%2F1686233065937AXa9I_JPEG%2F%25C5%25A9%25B1%25E2%25BA%25AF%25C8%25AFIMG_0918.JPG",
        "name": "그집앞 대관령본점",
        "address": "강원 평창군 대관령면 솔봉로 296",
        "coords": {
          "lat": 37.6626246,
          "lng": 128.6641813
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "매장이 넓어요",
          "고기 질이 좋아요",
          "단체모임 하기 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_96%2F1441034301038dD3Pu_JPEG%2F156679545139129_0.jpeg",
        "name": "동강식당",
        "address": "강원 평창군 미탄면 마하길 41-5",
        "coords": {
          "lat": 37.2917196,
          "lng": 128.5409039
        },
        "region": "평창",
        "keywords": [
          "-"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/11861619/home",
        "name": "크릴하우스",
        "address": "강원 평창군 대관령면 올림픽로 715 용평리조트",
        "coords": {
          "lat": 37.6457252,
          "lng": 128.6806395
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190213_195%2F1550043496003YlvW1_JPEG%2F8UmXrOCf218tIJc4XHb49GzI.jpg",
        "name": "돈감자탕",
        "address": "강원 평창군 대관령면 대관령로 113 2층",
        "coords": {
          "lat": 37.672366,
          "lng": 128.7088081
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "양이 많아요",
          "친절해요",
          "가성비가 좋아요",
          "매장이 넓어요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/31008815/home",
        "name": "보글보글밥집",
        "address": "강원 평창군 백오로 6",
        "coords": {
          "lat": 37.3677797,
          "lng": 128.3902882
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "양이 많아요",
          "가성비가 좋아요",
          "매장이 청결해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200709_239%2F1594280371320W7AG9_JPEG%2FBPnlO6bAbwsrrpuK-3jtPxPd.jpg",
        "name": "봉평식당",
        "address": "강원 평창군 봉평면 동이장터길 1-1",
        "coords": {
          "lat": 37.6152144,
          "lng": 128.3779391
        },
        "region": "평창",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "반찬이 잘 나와요",
          "재료가 신선해요",
          "양이 많아요"
        ]
      },

      //속초


    {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231101_278%2F1698814264128GAqDm_JPEG%2FIMG_3965.jpeg",
        "name": "갈산한식당",
        "address": "강원 속초시 바람꽃마을길 159",
        "coords": {
          "lat": 38.197301,
          "lng": 128.525278
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "뷰가 좋아요",
          "재료가 신선해요",
          "매장이 청결해요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/1574768348/home",
        "name": "진수성찬",
        "address": "강원 속초시 선사로1길 13 1층",
        "coords": {
          "lat": 38.1873101,
          "lng": 128.5908956
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "반찬이 잘 나와요",
          "친절해요",
          "양이 많아요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240225_110%2F1708853664795vFikh_JPEG%2FVideoCapture_20210722-095956.jpg",
        "name": "바람꽃해녀마을 속초본점",
        "address": "강원 속초시 바람꽃마을길 37 1층",
        "coords": {
          "lat": 38.1980428,
          "lng": 128.5323393
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "주차하기 편해요",
          "매장이 넓어요",
          "매장이 청결해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190822_85%2F1566468354670o9mQn_JPEG%2FPr9E9i1B7nP7e8eJEX-DZn5G.jpeg.jpg",
        "name": "누리밥상",
        "address": "강원 속초시 관광로 325",
        "coords": {
          "lat": 38.1900084,
          "lng": 128.5412776
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "주차하기 편해요",
          "반찬이 잘 나와요",
          "친절해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230404_138%2F16805728726527Q3hj_JPEG%2F1.jpg",
        "name": "치교치밥&치킨 속초점",
        "address": "강원 속초시 중앙로17번길 11 111동 104호",
        "coords": {
          "lat": 38.198636,
          "lng": 128.5778225
        },
        "region": "속초",
        "keywords": [
          "-"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230426_7%2F1682503488076dK9HW_JPEG%2FLUV07930.jpg",
        "name": "소구리설렁탕 엑스포점",
        "address": "강원 속초시 엑스포로 121-14 101호",
        "coords": {
          "lat": 38.1954573,
          "lng": 128.5811681
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "매장이 청결해요",
          "재료가 신선해요",
          "친절해요",
          "양이 많아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220521_10%2F1653109674709JtY8a_JPEG%2FKakaoTalk_20220521_140717818_01.jpg",
        "name": "동두천 부대찌개",
        "address": "강원 속초시 엑스포로1길 39 동두천부대찌개",
        "coords": {
          "lat": 38.1904708,
          "lng": 128.5856146
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "양이 많아요",
          "재료가 신선해요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231011_184%2F1697002605853MY97m_JPEG%2FIMG_1713.jpg",
        "name": "속초당",
        "address": "강원 속초시 중앙로 300-1 1층",
        "coords": {
          "lat": 38.2158502,
          "lng": 128.5945152
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "인테리어가 멋져요",
          "재료가 신선해요",
          "특별한 메뉴가 있어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210510_151%2F1620644485016kWx16_JPEG%2Fe_V-geefueayGSfGE9U0WPU4.jpg",
        "name": "해맞이식당",
        "address": "강원 속초시 동해대로 3679",
        "coords": {
          "lat": 38.1648534,
          "lng": 128.6079265
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "가성비가 좋아요",
          "재료가 신선해요",
          "친절해요",
          "뷰가 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200131_106%2F1580438647783ac5T0_JPEG%2FA6oqOfQCp-WYl_hQeoQy4soz.jpg",
        "name": "두메산골 추어탕",
        "address": "강원 속초시 번영로31번길 6-2",
        "coords": {
          "lat": 38.2039172,
          "lng": 128.5816747
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "가성비가 좋아요",
          "친절해요",
          "특별한 메뉴가 있어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171031_33%2F1509411957073NKbhp_JPEG%2FvwcI8n0qiHgMXlPREIQ10bLg.jpg",
        "name": "미리내식당",
          "address": "강원 속초시 미리내길 11",
        "coords": {
          "lat": 38.1917317,
          "lng": 128.5954788
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "반찬이 잘 나와요",
          "재료가 신선해요",
          "친절해요",
          "혼밥하기 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200212_44%2F1581491244313NqAQc_JPEG%2FKDnnVEDLZeJYRPsJyzMe_l46.jpg",
        "name": "장천식당",
        "address": "강원 속초시 중앙로 406",
        "coords": {
          "lat": 38.2240939,
          "lng": 128.5884384
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "특별한 메뉴가 있어요",
          "친절해요",
          "양이 많아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231029_28%2F1698572786716nVueS_JPEG%2F1698142946719.jpg",
        "name": "봉주네",
        "address": "강원 속초시 청학로 36 1층",
        "coords": {
          "lat": 38.2020154,
          "lng": 128.5834333
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "양이 많아요",
          "가성비가 좋아요",
          "친절해요",
          "재료가 신선해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240210_128%2F1707528441728kA0T3_JPEG%2F%25C2%25AB%25BC%25F8.jpg",
        "name": "강릉동화가든 짬뽕순두부 속초점",
        "address": "강원 속초시 관광로 433 강릉 동화가든 짬뽕순두부 속초점",
        "coords": {
          "lat": 38.1983809,
          "lng": 128.5357859
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "특별한 메뉴가 있어요",
          "친절해요",
          "주차하기 편해요",
          "재료가 신선해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240311_26%2F1710084784999HVf9S_JPEG%2F104A9662%25B2%25D9.JPG",
        "name": "세심촌 속초한우전문점",
        "address": "강원 속초시 먹거리2길 18 1층 세심촌 속초본점",
        "coords": {
          "lat": 38.1933563,
          "lng": 128.5748256
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "고기 질이 좋아요",
          "주차하기 편해요",
          "친절해요",
          "매장이 넓어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210907_284%2F1630981119815qBukY_JPEG%2FFmSua3coq5kFmfQVEAFPrK22.jpg",
        "name": "곤드레밥집",
        "address": "강원 속초시 법대로 18-1",
        "coords": {
          "lat": 38.2124177,
          "lng": 128.5931163
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "친절해요",
          "특별한 메뉴가 있어요",
          "매장이 청결해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231018_276%2F1697597870494IvoLf_JPEG%2F%25BC%25D3%25C3%25CA%25BB%25FD%25B4%25EB%25B1%25B8%25C5%25C1%25B8%25C0%25C1%25FD_%252823%2529.jpg",
        "name": "속초맛 생대구탕",
        "address": "강원 속초시 동해대로 3739",
        "coords": {
          "lat": 38.169221,
          "lng": 128.6058921
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "친절해요",
          "주차하기 편해요",
          "특별한 메뉴가 있어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230614_214%2F16867297257894s4SG_JPEG%2F1%25B9%25F8_2.jpg",
        "name": "목구멍 속초점",
        "address": "강원 속초시 조양로 84",
        "coords": {
          "lat": 38.187092,
          "lng": 128.5917754
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "고기 질이 좋아요",
          "친절해요",
          "직접 잘 구워줘요",
          "양이 많아요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/36548648/home",
        "name": "시장밥집",
        "address": "강원 속초시 중앙로147번길 16",
        "coords": {
          "lat": 38.2045407,
          "lng": 128.5901784
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "친절해요",
          "양이 많아요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230404_17%2F1680571368820H73yI_PNG%2F2.png",
        "name": "챙길 밥 속초점",
        "address": "강원 속초시 교동로 33",
        "coords": {
          "lat": 38.202102,
          "lng": 128.5787645
        },
        "region": "속초",
        "keywords": [
          "-"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/35059287/home",
        "name": "한끼",
        "address": "강원 속초시 조양로64번길 9",
        "coords": {
          "lat": 38.1876606,
          "lng": 128.5936052
        },
        "region": "속초",
        "keywords": [
          "친절해요",
          "음식이 맛있어요",
          "혼밥하기 좋아요",
          "반찬이 잘 나와요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201018_22%2F16029492392854aeRz_JPEG%2FwX3uUhi97GgXLy7Q1QcIlu6A.jpg",
        "name": "놀부마누라",
        "address": "강원 속초시 관광로 264",
        "coords": {
          "lat": 37,
          "lng": 128
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "주차하기 편해요",
          "매장이 청결해요",
          "혼밥하기 좋아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230603_164%2F16857572328475Szuj_JPEG%2FIMG_3501.jpeg",
        "name": "자매한식당",
        "address": "강원 속초시 만천3길 15 자매한식당",
        "coords": {
          "lat": 38.1989811,
          "lng": 128.5761543
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "반찬이 잘 나와요",
          "양이 많아요",
          "친절해요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/1628795752/home",
        "name": "뚱이네",
        "address": "강원 속초시 만천1길 4-2",
        "coords": {
          "lat": 38.1980398,
          "lng": 128.5753692
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/15019152/home",
        "name": "장사식당",
        "address": "강원 속초시 중앙로 407",
        "coords": {
          "lat": 38.2239539,
          "lng": 128.5879559
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "가성비가 좋아요",
          "친절해요",
          "반찬이 잘 나와요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200129_174%2F15802603512773rkxv_JPEG%2Fs_ApJmPEj1nNXCRzfD9CfGCk.jpg",
        "name": "평강막국수",
        "address": "강원 속초시 동해대로3950번길 15",
        "coords": {
          "lat": 38.1882289,
          "lng": 128.6025797
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "양이 많아요",
          "재료가 신선해요",
          "매장이 넓어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231219_16%2F1702953510047kKlS2_JPEG%2FKakaoTalk_20231219_113603951_03.jpg",
        "name": "일품양평해장국 속초조양점",
        "address": "강원 속초시 동해대로 4006",
        "coords": {
          "lat": 38.1902927,
          "lng": 128.5967796
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "양이 많아요",
          "가성비가 좋아요",
          "재료가 신선해요",
          "인테리어가 멋져요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231129_51%2F17012290430060vbqi_JPEG%2F01_%25BB%25E7%25C0%25E5%25B4%25D4%25BB%25E7%25C1%25F8_downsize.jpg",
        "name": "진솔할머니순두부",
        "address": "강원 속초시 원암학사평길 118",
        "coords": {
          "lat": 38.2064046,
          "lng": 128.5208907
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "매장이 넓어요",
          "재료가 신선해요",
          "친절해요",
          "양이 많아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220410_221%2F1649553211135RbHsi_PNG%2F%25B9%25E9%25B9%25DD%25B0%25A1%25B7%25CE%25B0%25ED%2528%25B9%25E8%25B0%25E6%25BE%25F8%25C0%25BD%2529.png",
        "name": "백반가",
        "address": "강원 속초시 중앙로108번길 85 1층",
        "coords": {
          "lat": 38.2022451,
          "lng": 128.5905127
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "양이 많아요",
          "반찬이 잘 나와요",
          "재료가 신선해요",
          "친절해요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/1632362255/home",
        "name": "속초밥집",
        "address": "강원 속초시 미시령로 3454",
        "coords": {
          "lat": 38.207926,
          "lng": 128.5822339
        },
        "region": "속초",
        "keywords": [
          "-"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230927_1%2F1695807508338WLiUA_JPEG%2F04-2_%25B2%25BF%25B8%25B7%25B9%25DD%25B9%25DD%25C0%25CC.jpg",
        "name": "남도술상 남도밥상",
        "address": "강원 속초시 대포항희망1길 87-1 1층",
        "coords": {
          "lat": 38.1747386,
          "lng": 128.6080612
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "친절해요",
          "양이 많아요",
          "매장이 넓어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230510_9%2F1683720952316gCT9j_JPEG%2FIMG_1376.jpg",
        "name": "제제네식탁",
        "address": "강원 속초시 조양로105번길 12 단층",
        "coords": {
          "lat": 38.1859955,
          "lng": 128.5886978
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "인테리어가 멋져요",
          "친절해요",
          "재료가 신선해요",
          "매장이 청결해요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240110_263%2F1704848365643nKMsa_JPEG%2F20240110_073211.jpg",
        "name": "속초국밥",
        "address": "강원 속초시 중앙로147번길 43-4",
        "coords": {
          "lat": 38.2040799,
          "lng": 128.5886172
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "양이 많아요",
          "재료가 신선해요",
          "친절해요",
          "가성비가 좋아요"
        ]
      },
      {
        "img": "https://m.place.naver.com/restaurant/1322183448/home",
        "name": "은혜식당",
        "address": "강원 속초시 새마을길 21",
        "coords": {
          "lat": 38.1867432,
          "lng": 128.6026129
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "반찬이 잘 나와요",
          "재료가 신선해요",
          "친절해요",
          "양이 많아요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230309_300%2F1678362895334fNYKA_JPEG%2F0C69E9D5-3BF1-4BBF-B6F8-9C862979FC0D.jpeg",
        "name": "백주류",
        "address": "강원 속초시 청초호반로 79 2층",
        "coords": {
          "lat": 38.1899502,
          "lng": 128.5856368
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "친절해요",
          "인테리어가 멋져요",
          "술이 다양해요",
          "특별한 메뉴가 있어요"
        ]
      },
      {
        "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_270%2F1698908271054ck3kT_JPEG%2F2G3A0326.jpg",
        "name": "그리운보리밥",
        "address": "강원 속초시 법대로 34",
        "coords": {
          "lat": 38.2140103,
          "lng": 128.5937168
        },
        "region": "속초",
        "keywords": [
          "음식이 맛있어요",
          "재료가 신선해요",
          "친절해요",
          "양이 많아요",
          "특별한 메뉴가 있어요"
        ]
      },

      //양양

{
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220526_285%2F1653533167449feswL_JPEG%2F20220524_161822.jpg",
    "name": "낙산 전북팔도식당",
    "address": "강원 양양군 강현면 낙산사로 41 낙산 전북팔도식당",
    "coords": {
      "lat": 38.1209064,
      "lng": 128.6299041
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "인테리어가 멋져요",
      "재료가 신선해요",
      "양이 많아요",
      "특별한 메뉴가 있어요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230531_239%2F1685519322661FsiXa_JPEG%2F4BE78908-EA7B-48F7-9B03-F589A5ECA37F.jpeg",
    "name": "최가네밥집",
    "address": "강원 양양군 현남면 동해대로 849-7 1층 최가네밥집",
    "coords": {
      "lat": 37.9766303,
      "lng": 128.7573373
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "주차하기 편해요",
      "가성비가 좋아요",
      "재료가 신선해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240114_151%2F1705221090518Rpd7u_JPEG%2F1000015696.jpg",
    "name": "바람꽃해녀마을 낙산점",
    "address": "강원 양양군 양양읍 동해대로 3029-3",
    "coords": {
      "lat": 38.1129567,
      "lng": 128.6315694
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "친절해요",
      "매장이 청결해요",
      "주차하기 편해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240115_68%2F17052974758758oAR2_JPEG%2FKakaoTalk_20240115_144418029.jpg",
    "name": "사계절횟집 양양 쏠비치본점",
    "address": "강원 양양군 손양면 수산1길 23",
    "coords": {
      "lat": 38.0775169,
      "lng": 128.6724696
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "양이 많아요",
      "친절해요",
      "가성비가 좋아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220120_11%2F1642644110427zx3dO_JPEG%2FScreenshot_20220113-190706_NAVER.jpg",
    "name": "미스터빠삭 양양점",
    "address": "강원 양양군 양양읍 북문길 14",
    "coords": {
      "lat": 38.0773303,
      "lng": 128.6210141
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "매장이 청결해요",
      "재료가 신선해요",
      "가성비가 좋아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180727_255%2F15326841744218d7r4_JPEG%2FyqIW_bWNgMfiBdzVTQWe-k29.jpg",
    "name": "그옛날밥상",
    "address": "강원 양양군 손양면 수산1길 43",
    "coords": {
      "lat": 38.0793499,
      "lng": 128.6721397
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "가성비가 좋아요",
      "반찬이 잘 나와요",
      "친절해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220704_154%2F1656895793582XEPtX_JPEG%2F657A2842.JPG",
    "name": "범바우막국수 양양본점",
    "address": "강원 양양군 강현면 동해대로 3277-22",
    "coords": {
      "lat": 38.1328026,
      "lng": 128.6189829
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "주차하기 편해요",
      "재료가 신선해요",
      "친절해요",
      "양이 많아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230206_13%2F1675657573240dJxuh_JPEG%2F1D3A7009.jpg",
    "name": "화로애",
    "address": "강원 양양군 양양읍 양양로 86",
    "coords": {
      "lat": 38.07453230000001,
      "lng": 128.6198665
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "양이 많아요",
      "재료가 신선해요",
      "가성비가 좋아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231009_21%2F169685637618481kWx_JPEG%2F20231005_142615.jpg",
    "name": "낙산그밥집",
    "address": "강원 양양군 강현면 주청2길 5 (주청리 116-14)",
    "coords": {
      "lat": 38.1188571,
      "lng": 128.6291174
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "가성비가 좋아요",
      "재료가 신선해요",
      "혼밥하기 좋아요",
      "친절해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190523_240%2F1558610881964hSQoT_JPEG%2FMLM_5p_rIIEHFvClcyxE4xmd.jpeg.jpg",
    "name": "SLOWDOWN",
    "address": "강원 양양군 현남면 인구길 48-1 102호",
    "coords": {
      "lat": 37.9685388,
      "lng": 128.7614922
    },
    "region": "양양",
    "keywords": [
      "-"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f640_380&amp;src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MjZfMjY1%2FMDAxNjg1MDY4NDEwNjE0.0KkDzLcLLLDVlh19Sq6J0MhGz0ytEejzoZKcL8JxUR4g.s00XMBaPmxgE5LRwWXx9ERVWB3olgyxNZsW3oCUzjG0g.JPEG.ysy7700%2FIMG_0429.jpg%23900x676",
    "name": "해변밥집",
    "address": "강원 양양군 현남면 인구길 52-5",
    "coords": {
      "lat": 37.9689616,
      "lng": 128.7616994
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "가성비가 좋아요",
      "양이 많아요",
      "재료가 신선해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231206_218%2F1701853513315dkme0_JPEG%2F5F78A734-442F-4D22-9697-8B480F91F91A.jpeg",
    "name": "대포면옥 분점",
    "address": "강원 양양군 양양읍 동해대로 2825 대포면옥 분점",
    "coords": {
      "lat": 38.0966431,
      "lng": 128.6279971
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "매장이 넓어요",
      "양이 많아요",
      "친절해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220322_139%2F1647949273457AKg0b_JPEG%2F1647949063028-1.jpg",
    "name": "정암식당",
    "address": "강원 양양군 강현면 동해대로 3405",
    "coords": {
      "lat": 38.1415105,
      "lng": 128.6128585
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "친절해요",
      "뷰가 좋아요",
      "매장이 청결해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230411_94%2F16811961171774orVY_JPEG%2FKakaoTalk_20230204_124011980_01.jpg",
    "name": "일번지감자탕",
    "address": "강원 양양군 양양읍 양양로 78-3",
    "coords": {
      "lat": 38.0748318,
      "lng": 128.6203988
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "양이 많아요",
      "재료가 신선해요",
      "매장이 청결해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231101_109%2F1698796974716HCdEE_JPEG%2F1000012938.jpg",
    "name": "기사문",
    "address": "강원 양양군 현북면 기사문길 35-1 기사문밥집",
    "coords": {
      "lat": 38.0084533,
      "lng": 128.7299826
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "반찬이 잘 나와요",
      "재료가 신선해요",
      "친절해요",
      "가성비가 좋아요"
    ]
  },
  {
    "img": "https://m.place.naver.com/restaurant/1777767208/home",
    "name": "인구술집",
    "address": "강원 양양군 현남면 인구길 48-3",
    "coords": {
      "lat": 37.9685864,
      "lng": 128.7617736
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "아늑해요",
      "친절해요",
      "매장이 넓어요"
    ]
  },
  {
    "img": "https://m.place.naver.com/restaurant/11643924/home",
    "name": "김가네",
    "address": "강원 양양군 강현면 낙산사로27번길 1",
    "coords": {
      "lat": 38.1203097,
      "lng": 128.6289841
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "반찬이 잘 나와요",
      "친절해요",
      "양이 많아요",
      "재료가 신선해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221201_58%2F16698691206643ySsJ_JPEG%2F20221201_131939.jpg",
    "name": "흥부네밥상",
    "address": "강원 양양군 양양읍 동해대로 3019",
    "coords": {
      "lat": 38.1124394,
      "lng": 128.6320931
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "재료가 신선해요",
      "가성비가 좋아요",
      "매장이 청결해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240315_294%2F1710485495697VaJ0B_JPEG%2F1000001995.jpg",
    "name": "쌈이랑",
    "address": "강원 양양군 양양읍 임천1길 80 2층",
    "coords": {
      "lat": 38.0710955,
      "lng": 128.6089796
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "매장이 청결해요",
      "친절해요",
      "인테리어가 멋져요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220817_227%2F1660724831752FstD6_JPEG%2FKakaoTalk_20220817_172241086.jpg",
    "name": "일품양평해장국 양양점",
    "address": "강원 양양군 양양읍 복개길 17",
    "coords": {
      "lat": 38.0729976,
      "lng": 128.619083
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "양이 많아요",
      "혼밥하기 좋아요",
      "매장이 청결해요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230914_199%2F1694696402197b0LBV_JPEG%2F4B4A1E19-B7CE-4983-9967-44AF8D535F7B.jpeg",
    "name": "하조대숯불구이",
    "address": "강원 양양군 현북면 하조대2길 48-47 102호",
    "coords": {
      "lat": 38.0236611,
      "lng": 128.7216429
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "고기 질이 좋아요",
      "친절해요",
      "매장이 청결해요",
      "특별한 메뉴가 있어요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221219_79%2F16714296718924QL3q_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2022-12-19_150034.png",
    "name": "등불가든",
    "address": "강원 양양군 양양읍 포월나들길 23",
    "coords": {
      "lat": 38.103649,
      "lng": 128.6304948
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "재료가 신선해요",
      "단체모임 하기 좋아요",
      "양이 많아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230802_44%2F1690963232972bFJ58_PNG%2FIMG_2182.png",
    "name": "서주당",
    "address": "강원 양양군 현남면 인구중앙길 46 1층 서주당",
    "coords": {
      "lat": 37.96885,
      "lng": 128.7601231
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "특별한 메뉴가 있어요",
      "인테리어가 멋져요",
      "대화하기 좋아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230401_127%2F1680335411516cJw44_JPEG%2F5F70302B-E870-4E64-858A-0219D9A7E119.jpeg",
    "name": "죽도식당",
    "address": "강원 양양군 현남면 인구중앙길 63",
    "coords": {
      "lat": 37.9704324,
      "lng": 128.7604341
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "친절해요",
      "재료가 신선해요",
      "양이 많아요",
      "가성비가 좋아요"
    ]
  },
  {
    "img": "https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210821_65%2F1629508511535KbXwM_JPEG%2FRnKi9K5ovYk-toRqZ4-0EgK1.jpg",
    "name": "양양째복",
    "address": "강원 양양군 강현면 동해대로 3234 양양째복",
    "coords": {
      "lat": 38.12812450000001,
      "lng": 128.6224543
    },
    "region": "양양",
    "keywords": [
      "음식이 맛있어요",
      "재료가 신선해요",
      "특별한 메뉴가 있어요",
      "친절해요",
      "양이 많아요"
    ]
  }



  ];
  
  
  export default restaurants;
  