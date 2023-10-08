import { Route, Routes } from "react-router-dom";

// LAYOUT
import { DefaultLayout } from "../layout/DefaultLayout";

// SCREENS
import { Home } from "../pages/Home/Home";
import { Details } from "../pages/Details/Details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Details />}></Route>
      </Route>
    </Routes>
  );
}