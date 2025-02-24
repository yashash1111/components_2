import LikeButton from './likebutton';

function PostCard({ profileImage, username, content, isLiked }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      maxWidth: '500px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <img 
          src={profileImage} 
          alt={username}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '12px'
          }}
        />
        <h3 style={{ margin: 0 }}>{username}</h3>
      </div>
      <p style={{ marginBottom: '12px' }}>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
}

export default PostCard;