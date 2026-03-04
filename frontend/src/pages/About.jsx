function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>About This Project</h2>
      <p>
        This is a full-stack DevOps demonstration project using:
      </p>
      <ul>
        <li>React.js (Frontend)</li>
        <li>Node.js + Express (Backend)</li>
        <li>MongoDB (Database)</li>
        <li>Docker & Docker Compose</li>
        <li>GitHub Actions CI/CD</li>
        <li>Automatic deployment using Watchtower</li>
      </ul>
    </div>
  );
}

export default About;