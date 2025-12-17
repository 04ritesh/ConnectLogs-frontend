import { useState } from "react";
import { createExperience } from "../api/experience.api";

function CreateExperience() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: []
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await createExperience(form, 1);
    alert("Experience created");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Create New Experience</h2>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="content" placeholder="Content" onChange={handleChange} />
        <input name="tags" placeholder="Tags (comma-separated)" onChange={e => setForm({ ...form, tags: e.target.value.split(',').map(t => t.trim()) })} />
        <button>Create Experience</button>
      </form>
    </div>
  );
}

export default CreateExperience;
