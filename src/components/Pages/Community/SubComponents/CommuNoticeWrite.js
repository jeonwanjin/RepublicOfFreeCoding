import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommuNoticeWrite.css';

const CommuNoticeWrite = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostSubmit = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const newPost = {
      id: 4,
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    onPostSubmit(newPost);

    setTitle('');
    setContent('');
  };

  return (
    <div className="CommuSection">
      <div>
        <div>
          <div>커뮤니티</div>
          <div>초기화</div>
        </div>
        <ul className="CommuNav">
          <li><Link to='/community'>공지사항</Link></li>
          <li><Link to='/community/qna'>문의사항</Link></li>
          <li><Link to='/community/faq'>FAQ</Link></li>
        </ul>
      </div>

      <div className="CommuRight">
        <h1>공지사항 글 작성</h1>
        <input
          className="CommuWriteTitle"
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div>
          <textarea
            className="CommuWriteText"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="CommuWriteButton" onClick={handlePostSubmit}>글쓰기</button>
      </div>
    </div>
  );
};

export default CommuNoticeWrite;

