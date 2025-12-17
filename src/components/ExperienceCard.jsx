function ExperienceCard({ exp }) {
  return (
    <div className="card">
      <h3>{exp.title}</h3>
      <p>{exp.summary}</p>

      <div>
        ❤️ {exp.likesCount}
        👁 {exp.viewsCount}
      </div>
    </div>
  );
}

export default ExperienceCard;
