import { useState } from "react";
import { createExperience } from "../api/experience.api";
import { useAuth } from '../context/AuthContext';

function CreateExperience() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: []
  });

  if (!user) {
    return (
      <div className="container">
        <div className="auth-container">
          <h2>Please login to create experiences</h2>
          <a href="/login">Go to Login</a>
        </div>
      </div>
    );
  }

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createExperience(form, user.id);
      alert("Experience created successfully!");
      setForm({ title: "", content: "", tags: [] });
    } catch (err) {
      alert("Failed to create experience");
    }
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
