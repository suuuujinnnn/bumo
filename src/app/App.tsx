import { useEffect, useRef } from "react";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";
import { HomePage } from "../pages/HomePage";
import { ListingPage } from "../pages/ListingPage";
import { DetailPage } from "../pages/DetailPage";
import { GuidePage } from "../pages/GuidePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SupportPage } from "../pages/SupportPage";

function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const title = document.querySelector("main h1");
      document.title = `${title?.textContent || "페이지 안내"} | 의정부장애인부모연대`;
      const section = hash ? document.getElementById(hash.slice(1)) : null;
      if (section) {
        section.focus({ preventScroll: true });
        section.scrollIntoView({ block: "start" });
      } else if (previousPath.current !== pathname) {
        (title as HTMLElement | null)?.focus({ preventScroll: true });
        window.scrollTo(0, 0);
      }
      previousPath.current = pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}
function LegacyLocalRedirect() {
  const { hash, search } = useLocation();
  const targetHash = ["#contact", "#directions", "#introduction"].includes(hash)
    ? hash
    : "";
  return (
    <Navigate replace to={{ pathname: "/about", search, hash: targetHash }} />
  );
}
export function App() {
  return (
    <HashRouter>
      <RouteEffects />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="support">
            <Route index element={<SupportPage />} />
            <Route path=":id" element={<DetailPage area="support" />} />
          </Route>
          {(["activities", "news", "resources"] as const).map((area) => (
            <Route key={area} path={area}>
              <Route index element={<ListingPage area={area} />} />
              <Route path=":id" element={<DetailPage area={area} />} />
            </Route>
          ))}
          {(["about", "participate"] as const).map((kind) => (
            <Route key={kind} path={kind} element={<GuidePage kind={kind} />} />
          ))}
          <Route path="local" element={<LegacyLocalRedirect />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
