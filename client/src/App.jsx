import { Route, Routes } from "react-router-dom";
import { CreateCointainer, Header, MainCointainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { getFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchInitialData = async () => {
    await getFoodItems().then((data) =>
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <AnimatePresence existBeforeEnter>
      <div
        className="w-screen h-auto flex flex-col"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainCointainer />} />
            <Route path="/createItem" element={<CreateCointainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
