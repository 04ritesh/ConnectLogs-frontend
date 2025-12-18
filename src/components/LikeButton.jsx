import { useState, useEffect } from "react";
import { likeExperience, unlikeExperience, checkLikeStatus, getLikesCount } from "../api/likes.api";
import { useAuth } from '../context/AuthContext';

function LikeButton({ experienceId }) {
  const { user } = useAuth();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('LikeButton user:', user);
    fetchLikeData();
  }, [experienceId, user]);

  const fetchLikeData = async () => {
    try {
      const countRes = await getLikesCount(experienceId);
      setLikes(countRes.data);
      
      if (user && user.id) {
        const statusRes = await checkLikeStatus(experienceId, user.id);
        setIsLiked(statusRes.data);
      }
    } catch (err) {
      // Likes service not available, show 0 likes
      setLikes(0);
      setIsLiked(false);
    }
  };

  const handleLike = async () => {
    if (!user || !user.id) {
      alert('Please login to like experiences');
      return;
    }
    
    if (loading) return;
    
    setLoading(true);
    try {
      if (isLiked) {
        await unlikeExperience(experienceId, user.id);
        setLikes(prev => prev - 1);
        setIsLiked(false);
      } else {
        await likeExperience(experienceId, user.id);
        setLikes(prev => prev + 1);
        setIsLiked(true);
      }
    } catch (err) {
      alert('Like service temporarily unavailable');
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
