import React, { useState } from "react";
import './Contents.css'
import styled from "styled-components";
export default function Contents(){
  
  const bests = [
    {
      id: 'best-01',
      image: '/images/best_01.png',
      desc: '쫄깃하고 탱글탱글한 식감이 일품!',
      title: '캠핑어묵탕(순한맛)',
      saleprice: '12,940원',
      price: '8,900원',
      sale: true
    },
    {
      id: 'best-02',
      image: '/images/best_02.png',
      desc: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
      title: '어묵탕모듬어묵 플러스',
      price: '19,000원'
    },
    {
      id: 'best-03',
      image: '/images/best_03.png',
      desc: '시장에서 맛 보았던 추억의 어묵 우동',
      title: '[삼진어묵 창립 69주년 행사]실속모둠어묵',
      saleprice: '23,500원',
      price: '19,000원',
      sale: true
    },
    {
      id: 'best-04',
      image: '/images/best_04.png',
      desc: '인기 고급제품으로 구성된 선물세트',
      title: '1953세트 2호',
      price: '36,000원'
    },
    {
      id: 'best-05',
      image: '/images/best_05.png',
      desc: '팔도비빔장으로 어묵볶음을 간편하게',
      title: '딱한끼 볶음요리용(팔도)',
      price: '4,980원',
      new: true,

    },
    {
      id: 'best-06',
      image: '/images/best_06.png',
      desc: '가정에서 소량으로 즐기는 꼬치어묵',
      title: '[냉동] 딱한끼 사각꼬치',
      price: '5,500원',
      sale:  true,
      saleprice : '6990원'
    },
    {
      id: 'best-07',
      image: '/images/best_07.png',
      desc: '어묵 고유의 탱글하고 담백한 맛',
      title: '딱한끼 어묵탕(순한맛)',
      price: '4,000원',
      best: true
    },
    {
      id: 'best-08',
      image: '/images/best_08.png',
      desc: '간식어묵 6종을 한번에 즐길 수 있는 제품',
      title: '어부의바 6종세트',
      price: '9,900원',
      sale: true,
      saleprice: '13,000원'
    },
  ]
  const recommends = [
    {
      id: 'recommend-01',
      image: '/images/recommend_01.jpg',
      desc: '팔도x삼진 신제품 기념 이벤트',
      title: '팔도 딱한기 볶음어묵 2종(팔도)',
      price: '8,900원',
      new: true,
      sale: true,
      saleprice: '12,940원'
    },
    {
      id: 'recommend-02',
      image: '/images/recommend_02.png',
      desc: '탱글한 식감이 일품인 모둠어묵',
      title: '특선 모둠어묵',
      price: '16,000원',
      new: true
    },
    {
      id: 'recommend-03',
      image: '/images/recommend_03.png',
      desc: '팔도x삼진 콜라보 사각어묵',
      title: '딱한끼 볶음사각(팔도)',
      price: '3,980원',
      new: true
    },
    {
      id: 'recommend-04',
      image: '/images/recommend_04.png',
      desc: '고소하고 담백한 사각어묵',
      title: '담백한 사각어묵',
      price: '2,700원',
      new: true
    },
    {
      id: 'recommend-05',
      image: '/images/recommend_05.jpg',
      desc: '잘게 썬 당면이 가득 담겨 탱글한 어묵',
      title: '삼각당면(진공)',
      price: '4,980원',
      new: true
    },
    {
      id: 'recommend-06',
      image: '/images/recommend_06.jpg',
      desc: '오징어를 듬뿍 넣어 감칠맛이 좋은 어묵',
      title: '오징어땡소(진공)',
      price: '3,480원',
      new: true
    },
    {
      id: 'recommend-07',
      image: '/images/recommend_07.png',
      desc: '매콤한 김치와 어묵이 어우러진 볶음밥',
      title: '[냉동] 김치어묵볶음밥',
      price: '7,900원',
      new: true,
      sale: true,
      saleprice: '9,00원'
    },
    {
      id: 'recommend-08',
      image: '/images/recommend_08.png',
      desc: '신선한 새우가 가득 들어있는 어묵볶음밥',
      title: '[냉동] 새우어묵볶음밥',
      price: '8,700원',
      new: true
    },
  ]

  const [count, setCount] = useState([0,0,0,0,0,0,0,0]);
  const [count2, setCount2] = useState([0,0,0,0,0,0,0,0]);

  const gifts = [
    {
      id: 'gift-01',
      image: '/images/gift_01.png',
      title: '1953세트 2호',
      desc: '인기 고급제품으로 구성된 선물세트',
      price: '36,000원'
    },
    {
      id: 'gift-02',
      image: '/images/gift_02.png',
      title: '삼진프리미엄세트',
      desc: '삼진을 대표하는 프리미엄 어묵',
      price: '48,000원',
      best: true
    }
  ]
  const Button = styled.button`
    display: inline-block;
    width:50%;
    height: 54px;
    background-color: #f8f8f8;
    color: #bbb;
    outline: none;
    border: 1px solid #eee;
  `

  const benefits = [
    {
      id: 'benefit-01',
      image: '/images/DM_20220706163311_074.png',
      title: '회원가입 시 마일리지 혜택',
      desc: '신규 회원가입 시 2,000원 마일리지가 지급됩니다.'
    },
    {
      id: 'benefit-02',
      image: '/images/DM_20220706163311_074.png',
      title: '3만원 이상 무료배송',
      desc: '3만원 이상 무제한 무료배송 합니다.'
    },
    {
      id: 'benefit-03',
      image: '/images/DM_20220706163311_074.png',
      title: '금액대별 회원 혜택',
      desc: '구매 금액대별 혜택을 드리는 회원제도'
    },
  ]
  const reservations = [
    {
      id: 'reserve-01',
      image : '/images/store.jpg',
      tag: 'STORE',
      title: '가까운 매장 찾기',
      desc: '우리동네에서 가까운 삼진어묵 매장을 찾아보세요!'
    },
    {
      id: 'reserve-02',
      image : '/images/reservation.jpg',
      tag: 'RESERVATION',
      title: '체험·역사관 예약',
      desc: '삼진어묵 역사관 방문과 어묵 만들기를 체험해보세요!'
    },
  ]


  return (
    <>
      <section className="visual-main">
        <img src={process.env.PUBLIC_URL+"/images/visual_main_01.jpg"} alt="visual_main"/>
      </section>

      <section className="best-container">
        <div className="inner">
          <h2 className="best-container__title">삼진어묵 베스트</h2>

          <div className="best__product">
            {
              bests.map((best,i) => {
                return (
                  <div className="best" key={best.id}>
                    <div className="tag">
                      {best.best? <img src="/images/DM_20220706163311_044.png"></img>:null}
                      {best.new? <img src="/images/DM_20220706163311_039.png"></img>:null}
                      {best.sale? <img src="/images/DM_20220706163311_047.png"></img>:null}
                    </div>
                    <img src={best.image} alt="best_img1"/>
                    <div className="text-area">
                      <p className="best__desc">{best.desc}</p>
                      <p className="best__title">{best.title}</p>
                      {best.sale? <span className="saleprice">{best.saleprice}</span>:null}
                      <span className="best__price">{best.price}</span>
                    </div>
                    <div className="best__btn">
                      <Button onClick={()=>{
                        let countCopy = [...count]
                        countCopy[i] += 1
                        setCount(countCopy)
                      }}>🤍찜하기{count[i]}</Button>
                      <Button>🛒장바구니</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="recommend-container">
        <div className="inner">
          <h2 className="recommend-container__title">삼진어묵 추천상품</h2>
          <div className="recommend__product">
            {
              recommends.map((recommend,i)=>{
                return (
                  <div className="recommend" key={recommend.id}>
                    <div className="tag">
                      {recommend.best? <img src="/images/DM_20220706163311_044.png"></img>:null}
                      {recommend.new? <img src="/images/DM_20220706163311_039.png"></img>:null}
                      {recommend.sale? <img src="/images/DM_20220706163311_047.png"></img>:null}
                    </div>
                    <img src={recommend.image} alt="recommend-img"/>
                    <div className="text-area">
                      <p className="recommend__desc">{recommend.desc}</p>
                      <p className="recommend__title">{recommend.title}</p>
                      {recommend.sale? <span className="saleprice">{recommend.saleprice}</span>:null}
                      <span className="recommend__price">{recommend.price}</span>
                    </div>
                    <div className="recommend__btn">
                    <Button onClick={()=>{
                        let countCopy = [...count2]
                        countCopy[i] += 1
                        setCount2(countCopy)
                      }}>🤍찜하기{count2[i]}</Button>
                      <Button>🛒장바구니</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="gift-container">
        <div className="inner">
        <h2 className="gift-container__title">삼진어묵 선물세트</h2>
        <div className="gift__product">
          {
            gifts.map((gift)=>{
              return (
                <div className='gift' key={gift.id}>
                  <div className="tag">
                    {gift.best? <img src="/images/DM_20220706163311_044.png"></img>:null}
                  </div>
                  <img src={gift.image} alt="gift.image"/>
                  <div className="text-area">
                    <p className="gift__title">{gift.title}</p>
                    <p className="gift__desc">{gift.desc}</p>
                    <p className="gift__price">{gift.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </section>

      <section className="benefit-container">
        <div className="inner">
          {
            benefits.map((benefit) => {
              return (
                <div className="benefit" key={benefit.id}>
                  <img src={benefit.image} alt="benefit-img" />
                  <div className="title">{benefit.title}</div>
                  <div className="desc">{benefit.desc}</div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="reservation-cotainer">
        <div className="inner">
          {
            reservations.map((reservation)=>{
              return (
                <div className="reservation" key={reservation.id}>
                  <img src={reservation.image} alt="reservation"/>
                  <div className="text-area">
                    <div className="tag">{reservation.tag}</div>
                    <div className="title">{reservation.title}</div>
                    <div className="desc">{reservation.desc}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <h2 className="insta">인스타그램 @samjinamook</h2>

    </>
  )
}