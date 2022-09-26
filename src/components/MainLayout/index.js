import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div data-testid="main-layout">
      <Header />
      <div data-testid="body">{children}</div>
      <Footer />
    </div>
  );
};
