import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Report } from "../Report/Report";
import { ProductionTracker } from "../ProductionTracker/ProductionTracker";

export const Body = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/tracker" element={<ProductionTracker />} />
        </Routes>
    </>
  );
};