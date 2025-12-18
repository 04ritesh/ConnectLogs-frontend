import { useState, useEffect } from "react";
import { likeExperience, unlikeExperience, checkLikeStatus, getLikesCount } from "../api/likes.api";

function LikeButton({ experienceId, userId = 1 }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLikeData();
  }, [experienceId, userId]);

  const fetchLikeData = async () => {
    try {
      const [statusRes, countRes] = await Promise.all([
        checkLikeStatus(experienceId, userId),
        getLikesCount(experienceId)
      ]);
      setIsLiked(statusRes.data);
      setLikes(countRes.data);
    } catch (err) {
      console.error('Error fetching like data:', err);
    }
  };

  const handleLike = async () => {
    if (loading) return;
    
    setLoading(true);
    try {
      if (isLiked) {
        await unlikeExperience(experienceId, userId);
        setLikes(prev => prev - 1);
        setIsLiked(false);
      } else {
        await likeExperience(experienceId, userId);
        setLikes(prev => prev + 1);
        setIsLiked(true);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleLike}
      disabled={loading}
      className={`like-button ${isLiked ? 'liked' : ''}`}
    >
      {isLiked ? '❤️' : '🤍'} {likes}
    </button>
  );
}

export default LikeButton;
