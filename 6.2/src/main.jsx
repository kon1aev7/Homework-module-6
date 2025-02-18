import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "modern-normalize";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { StrictMode } from "react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
  </StrictMode>
);
