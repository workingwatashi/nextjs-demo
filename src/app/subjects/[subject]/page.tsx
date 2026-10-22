const subjectData: Record<string, { title: string; description: string; resources: string[] }> = {
  "web-development": {
    title: "Web Development",
    description: "Learn how websites are structured and built.",
    resources: ["HTML and CSS fundamentals", "JavaScript basics", "React component patterns"],
  },
  "data-structures": {
    title: "Data Structures",
    description: "Study common structures used to organise data.",
    resources: ["Arrays and strings", "Linked lists", "Stacks and queues"],
  },
  "database-systems": {
    title: "Database Systems",
    description: "Learn how applications store and query data.",
    resources: ["Relational database concepts", "SQL SELECT queries", "Primary and foreign keys"],
  },
};

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const data = subjectData[subject];

  if (!data) {
    return <main className="container"><h1>Subject not found</h1><a href="/">← Back to subjects</a></main>;
  }

  return (
    <main className="container">
      <a href="/">← All subjects</a>
      <header className="hero">
        <p className="eyebrow">CAMPUS NOTES / SUBJECT</p>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>
      <section>
        <h2>Learning resources</h2>
        <ul>{data.resources.map((resource) => <li key={resource}>{resource}</li>)}</ul>
      </section>
    </main>
  );
}