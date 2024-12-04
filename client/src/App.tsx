import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/common/themeProvider";
import { Spinner } from "@/components/ui/spinner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const Layout = lazy(() => import("@/components/layout/layout"));
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const App: React.FC = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </ThemeProvider>
);

export default App;
