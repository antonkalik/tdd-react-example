import { Outlet } from "react-router";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useContext } from "react";
import { AppContext } from "../../context";

export const MainLayout = () => {
  const {
    actions: { addCard, reset },
  } = useContext(AppContext);

  return (
    <div data-testid="main-layout">
      <Header onReset={reset} onAdd={addCard} />
      <div data-testid="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
