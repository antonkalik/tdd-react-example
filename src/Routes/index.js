import { Routes as ReactRoutes, Route, Outlet } from "react-router-dom";
import { HomeView } from "src/views/HomeView";
import { CardsView } from "src/views/CardsView";
import { CardView } from "src/views/CardView";
import { AboutView } from "src/views/AboutView";
import { MainLayout } from "src/components/MainLayout";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="/cards" element={<Outlet />}>
          <Route index element={<CardsView />} />
          <Route path=":id" element={<CardView />} />
        </Route>
        <Route path="/about" element={<AboutView />} />
      </Route>
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </ReactRoutes>
  );
};
