// DashboardPageWrapper.js
import dynamic from 'next/dynamic';

const LinkerPage = dynamic(() => import('../../components/Linker/Linker'), { ssr: false });

const LinkerWrapper = () => {
  return <LinkerPage />;
};

export default LinkerWrapper;
