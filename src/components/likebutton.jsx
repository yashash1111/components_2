import { useState } from 'react';

function LikeButton({ isLiked }) {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: liked ? '#ff4757' : '#dfe4ea',
        color: liked ? 'white' : 'black',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
}

export default LikeButton;