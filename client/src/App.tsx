import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/layout/themeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";

const Layout = lazy(() => import("@/components/layout/layout"));
const Home = lazy(() => import("@/pages/Home"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Cart = lazy(() => import("@/pages/cart/Cart"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const UnderDevelopment = lazy(() => import("@/pages/UnderDevelopment"));

const App: React.FC = () => (
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Toaster richColors />
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="account" element={<UnderDevelopment />} />
              <Route path="account/:section" element={<UnderDevelopment />} />
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<UnderDevelopment />} />
              <Route path="checkout" element={<UnderDevelopment />} />

              <Route path="categories" element={<UnderDevelopment />} />
              <Route path="categories/:category" element={<UnderDevelopment />} />
              <Route path="collections" element={<UnderDevelopment />} />
              <Route path="collections/:collection" element={<UnderDevelopment />} />
              <Route path="new-arrivals" element={<UnderDevelopment />} />
              <Route path="best-sellers" element={<UnderDevelopment />} />
              <Route path="featured-products" element={<UnderDevelopment />} />
              <Route path="product/:id" element={<UnderDevelopment />} />
              <Route path="search" element={<UnderDevelopment />} />
              <Route path="search/:query" element={<UnderDevelopment />} />

              <Route path="about" element={<UnderDevelopment />} />
              <Route path="team" element={<UnderDevelopment />} />
              <Route path="contact" element={<UnderDevelopment />} />
              <Route path="faq" element={<UnderDevelopment />} />
              <Route path="terms" element={<UnderDevelopment />} />
              <Route path="privacy" element={<UnderDevelopment />} />
              <Route path="shipping" element={<UnderDevelopment />} />
              <Route path="returns" element={<UnderDevelopment />} />
              <Route path="legal" element={<UnderDevelopment />} />
              <Route path="careers" element={<UnderDevelopment />} />
              <Route path="press" element={<UnderDevelopment />} />
              <Route path="blog" element={<UnderDevelopment />} />
              <Route path="blog/:slug" element={<UnderDevelopment />} />
              <Route path="marketing" element={<UnderDevelopment />} />
              <Route path="analytics" element={<UnderDevelopment />} />
              <Route path="commerce" element={<UnderDevelopment />} />
              <Route path="insights" element={<UnderDevelopment />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  </ThemeProvider>
);

export default App;
