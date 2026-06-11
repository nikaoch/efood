import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import { GlobalCss } from "./styles.ts";
import RestPage from "./components/RestPage/index.tsx";

export type Food = {
  id: number;
  title: string;
  price: number;
  quantidade: number;
  image: string;
}

function App() {
  return (
    <>
    <GlobalCss/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<RestPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
