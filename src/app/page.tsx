const subjects = [
  { slug: "web-development", title: "Web Development", description: "HTML, CSS, JavaScript and modern frameworks." },
  { slug: "data-structures", title: "Data Structures", description: "Arrays, linked lists, stacks and queues." },
  { slug: "database-systems", title: "Database Systems", description: "SQL, tables, relationships and queries." },
];

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">STUDENT RESOURCE HUB</p>
        <h1>Welcome to Campus Notes</h1>
        <p>Find notes and learning resources for your next study session.</p>
      </header>
      <section>
        <h2>Explore subjects</h2>
        <div className="subject-grid">
          {subjects.map((subject) => (
            <a className="subject-card" href={`/subjects/${subject.slug}`} key={subject.slug}>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
              <span>Explore resources →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}