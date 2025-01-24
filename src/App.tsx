import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PageParamsProvider,
  PlasmicComponent,
  ComponentRenderData,
  PlasmicCanvasHost
} from '@plasmicapp/loader-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PLASMIC } from './plasmic-init';
import './styles/global.sass'

function AppRoot() {
  return (
    <div className="app-container">
      <PlasmicRootProvider loader={PLASMIC}>
        <Router>
          <Routes>
            <Route path="/" element={<CatchAllPage/>} />
            <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
          </Routes>
        </Router>
      </PlasmicRootProvider>
    </div>
  );
}

export default AppRoot

// We try loading the Plasmic page for the current route.
// If it doesn't exist, then return "Not found."
export function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<ComponentRenderData | null>(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function load() {
      const pageData = await PLASMIC.maybeFetchComponentData(location.pathname);
      setPageData(pageData);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>Not found</div>;
  }
  // The page will already be cached from the `load` call above.
  return (
    <PageParamsProvider
      route={location.pathname}
      query={Object.fromEntries(searchParams)}
    >
      <PlasmicComponent component={location.pathname} />
    </PageParamsProvider>
  );
}
