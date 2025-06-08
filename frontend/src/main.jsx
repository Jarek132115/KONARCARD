import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styling/index.css";
import "./styling/home.css";
import "./styling/fonts.css";
import "./styling/myprofile.css";
import "./styling/login.css";
import "./styling/navbar.css";
import "./styling/footer.css";
import "./styling/buttons.css";
import "./styling/product.css";
import "./styling/policies.css";
import "./styling/success.css";
import "./styling/sidebar.css";
import "./styling/profile.css";
import "./styling/nfccards.css";
import "./styling/notification.css";
import "./styling/subscription.css";
import "./styling/billing.css";
import "./styling/helpcentreinterface.css";

import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
