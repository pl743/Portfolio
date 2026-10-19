import { useEffect } from 'react';
import Certification from './Certificate';

function AllCertificatesPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return <Certification showAll={true} />;
}

export default AllCertificatesPage;
