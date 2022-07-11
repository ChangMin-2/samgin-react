import React from "react";

export default function Header(){
  const liGnbs = [
    {id: 'gnb-01', gnb: '검색'},
    {id: 'gnb-02', gnb: '로그인'},
    {id: 'gnb-03', gnb: '회원가입'},
    {id: 'gnb-04', gnb: '로그인'}
  ]

  const liLnbs = [
    {id: 'lnb-01', lnb: '베스트상품'},
    {id: 'lnb-02', lnb: '신상품'},
    {id: 'lnb-03', lnb: '기획전'},
    {id: 'lnb-04', lnb: '이벤트/혜택'},
    {id: 'lnb-05', lnb: '금복레시피'},
    {id: 'lnb-06', lnb: '레시피공모전'}
  ]
  
  return (
    <header className="header">
      <div className="header__container">
        <nav className="gnb">
          <ul>
            {
              liGnbs.map((liGnb)=>{
                return(
                  <li key={liGnb.id}>{liGnb.gnb}</li>
                )
              })
            }
          </ul>
        </nav>
        <div className="header__middle">
          <div className="inner">
            <div className="header__btn">
              <span>사업자 전용</span>
              <span>매장찾기</span>
            </div>
            <div className="header__logo">삼진어묵</div>
          </div>
        </div>
        <nav className="lnb">
          <div className="inner">
            <ul>
              {
                liLnbs.map((liLnb)=>{
                  return(
                    <li key={liLnb.id}>{liLnb.lnb}</li>
                  )
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}