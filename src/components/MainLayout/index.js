import { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { AppContext } from "src/context";
import { useApi } from "src/hooks/useApi";

export const MainLayout = () => {
  const {
    actions: { addCard, setCards, reset },
  } = useContext(AppContext);

  const { data, loading, error } = useApi(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data?.length]);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div data-testid="main-layout">
      <Header onReset={reset} onAdd={addCard} />
      <div data-testid="body">
        {loading ? <div>Loading...</div> : <Outlet />}
      </div>
      <Footer totalCards={data?.length} />
    </div>
  );
};
