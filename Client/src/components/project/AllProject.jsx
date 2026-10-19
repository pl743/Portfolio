import { useEffect } from 'react';
import Project from './Project';

function AllProjectsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return <Project showAll />;
}

export default AllProjectsPage;