import { Route, Routes, useLocation } from "react-router-dom";
import { CreateCointainer, Header, Login, MainCointainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { getFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

function App() {
  const [dispatch] = useStateValue();
  const location = useLocation(); // Get the current location

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

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === "/login";

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className="w-screen h-auto flex flex-col"
        style={{ backgroundColor: "var(--primary)" }}
      >
        {!isLoginPage && <Header />}
        <main
          className={`w-full ${
            isLoginPage ? "p-0" : "mt-14 md:mt-20 px-4 md:px-16 py-4"
          }`}
        >
          <Routes>
            <Route path="/*" element={<MainCointainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createItem" element={<CreateCointainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
