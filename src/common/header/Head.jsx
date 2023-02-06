import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+961025 96 6269</label>
            <i className="fa fa-envelope">+961025 96 6269</i>
            <label htmlFor="parkgutime@gmail.com"></label>
          </div>
          <div className="right row RText">
            <label>테마 FAQ's</label>
            <label>도움말</label>
            <span>🏴‍☠️</span>
            <label htmlFor="">KOR</label>
            <span>🏴‍☠️</span>
            <label htmlFor="">원</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
