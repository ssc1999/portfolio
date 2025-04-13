export async function load({ fetch }) {
  const [projectsRes, occupationsRes] = await Promise.all([
    fetch('http://localhost:1337/api/projects?populate=*'),
    fetch('http://localhost:1337/api/occupations')
  ]);

  const projectsData = await projectsRes.json();
  const occupationsData = await occupationsRes.json();

  const projects = (projectsData.data || []).map((item) => ({
    id: item.id,
    ...item
  }));

  const occupations = (occupationsData.data || []).map((item) => ({
    id: item.id,
    ...item
  }));

  return {
    projects,
    occupations
  };
}