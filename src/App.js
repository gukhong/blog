/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "울산 돈까스 맛집";
  let [title, setTitle] = useState(["롤토체스 덱 추천", "오늘 점심메뉴 추천", "React 독학",]);
  let [likeIt, setLikeIt] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Gukjin's Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다 순 정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '숨겨진 꿀덱 추천';
        setTitle(copy);
      }}>글 수정</button>

      <div className="list">
        <h4>{title[0]}{" "}<span onClick={ () => { setLikeIt(likeIt +1) } }>👍</span>{ likeIt }</h4>
        <p>9월 2일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>9월 2일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>9월 2일 발행</p>
      </div>
    </div>
  );
}

export default App;
