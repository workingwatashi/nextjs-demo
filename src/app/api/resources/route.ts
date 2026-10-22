export async function GET() {
  const resources = [
    {
      id: 1,
      title: "HTML and CSS fundamentals",
      subject: "Web Development",
    },
    {
      id: 2,
      title: "JavaScript basics",
      subject: "Web Development",
    },
    {
      id: 3,
      title: "Arrays and strings",
      subject: "Data Structures",
    },
  ];

  return Response.json({ resources });
}

export async function POST(request: Request) {
  const body = await request.json();
console.log(request.url);
  const newResource = {
    id: Date.now(),
    title: body.title,
    subject: body.subject,
  };

  return Response.json(
    {
      message: "Resource added successfully!",
      resource: newResource,
    },
    { status: 201 }
  );
}