import { Outlet } from "react-router";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export const MainLayout = () => {
  return (
    <div data-testid="main-layout">
      <Header />
      <div data-testid="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
