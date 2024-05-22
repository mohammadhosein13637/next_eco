// DashboardPageWrapper.js
import dynamic from 'next/dynamic';

const LinkerPage = dynamic(() => import('../(components)/LinkerPage'), { ssr: false });

const LinkerWrapper = () => {
  return <LinkerPage />;
};

export default LinkerWrapper;
