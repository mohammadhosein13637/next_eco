// DashboardPageWrapper.js
import dynamic from 'next/dynamic';

const LinkerPage = dynamic(() => import('../../(components)/DashboardPage'), { ssr: false });

const DashboardPageWrapper = () => {
  return <LinkerPage />;
};

export default DashboardPageWrapper;
