import { useEffect, useState } from "react";
import { getAllExperiences } from "../api/experience.api";
import ExperienceCard from "../components/ExperienceCard";
import LikeButton from "../components/LikeButton";

function Home() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchExperiences = async () => {
    setLoading(true);
    try {
      const res = await getAllExperiences();
      setExperiences(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <button onClick={fetchExperiences} disabled={loading}>
        {loading ? 'Loading...' : 'Get All Experiences'}
      </button>
      
      {experiences.length > 0 && (
        <div>
          <h2>Experiences ({experiences.length})</h2>
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <h3>{exp.title}</h3>
              <p>{exp.content}</p>
              {exp.tags && exp.tags.length > 0 && (
                <div className="tags-container">
                  <strong>Tags:</strong>
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <LikeButton experienceId={exp.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
