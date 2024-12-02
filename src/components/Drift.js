import { useEffect } from 'react';

const Drift = () => {
  useEffect(() => {
    if (window.drift) {
      window.drift.load('x6tm95saabxh');
    }
  }, []);

  return null;
};

export default Drift;