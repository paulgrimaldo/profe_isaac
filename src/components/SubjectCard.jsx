export default function SubjectCard({ icon, title, description }) {
  return (
    <article className="subject-card">
      <div className="subject-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
