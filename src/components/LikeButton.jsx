import { likeExperience } from "../api/experience.api";

function LikeButton({ experienceId }) {
  const userId = 1; // TEMP user

  const handleLike = async () => {
    await likeExperience(experienceId, userId);
    alert("Liked!");
  };

  return <button onClick={handleLike}>❤️ Like</button>;
}

export default LikeButton;
