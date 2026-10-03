import SubjectCard from "./SubjectCard.jsx";
import { SUBJECTS } from "../data/content.js";

export default function Subjects() {
  return (
    <section className="section section-alt" id="subjects">
      <div className="container">
        <h2 className="section-title">Materias</h2>
        <p className="section-subtitle">
          Elige el área en la que necesitas apoyo y comienza a aprender a tu
          propio ritmo.
        </p>
        <div className="subjects-grid">
          {SUBJECTS.map((subject) => (
            <SubjectCard
              key={subject.id}
              icon={subject.icon}
              title={subject.title}
              description={subject.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
