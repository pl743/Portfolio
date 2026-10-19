import { useEffect } from 'react';
import Skills from './Skills';

function AllSkillsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return <Skills showAll />;
}

export default AllSkillsPage;
