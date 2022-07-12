import React from "react";
import './Footer.css'
import styled from "styled-components";

export default function Footer(){

  const FooterBtn = styled.button`
  display: block;
  width: 162px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: -0.025em;
  color: #666;
  border: 1px solid #666;
  border-radius: 6px;
  margin-bottom: 10px;
  `


  return (
    <>
      <section className="customer-container">
        <div className="inner">
          <div className="cm__left">
            <div className="title">고객센터</div>
            <div className="contents">
              <div className="text-area">
                <p className="color-text strong">051-412-5468</p>
                <span>문자상담</span><span className="color-text">1644-1953</span>
                <p className="gray-text">09:00 ~ 18:00 평일 운영</p>
                <p className="bold-text">KCP구매안전(에스크로)서비스</p>
                <p className="gray-text">서비스 가입사실 확인 > </p>
              </div>
              <div className="btn-area">
                <FooterBtn>1:1 문의하기</FooterBtn>
                <FooterBtn>FAQ 바로가기</FooterBtn>
                <FooterBtn>카카오톡</FooterBtn>
              </div>
            </div>
          </div>
          <div className="cm__center">
            <div className="title">입금계좌</div>
            <p className="gray-text">무통장입금시 확인해주세요.</p>
            <p className="color-text strong">322-910082-65305</p>
            <span className="bold-text">하나은행 | 예금주 : 삼진식품(주)</span>
            <FooterBtn>입금자 확인하기</FooterBtn>

            <div className="img-area">
              <img src="/images/DM_20220706163311_070.png" alt="img" />
              <img src="/images/DM_20220706163311_071.png" alt="img" />
            </div>
          </div>
          <div className="cm__right">
            <div className="title">공지사항</div>
            <div className="gray-text"><span>[공지사항1]</span><span>2022.07.12</span></div>
            <div className="gray-text"><span>[공지사항2]</span><span>2022.07.11</span></div>
            <div className="gray-text"><span>[공지사항3]</span><span>2022.07.10</span></div>
            <div className="gray-text"><span>[공지사항4]</span><span>2022.07.09</span></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="inner">
          footer
        </div>
      </footer>
    </>
  )
}