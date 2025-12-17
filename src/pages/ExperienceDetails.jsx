import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getExperienceBySlug } from "../api/experience.api";
import LikeButton from "../components/LikeButton";

function ExperienceDetails() {
  const { slug } = useParams();
  const [exp, setExp] = useState(null);

  useEffect(() => {
    getExperienceBySlug(slug).then(res => setExp(res.data));
  }, [slug]);

  if (!exp) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{exp.title}</h2>
      <p>{exp.content}</p>

      <LikeButton experienceId={exp.id} />
    </div>
  );
}

export default ExperienceDetails;
