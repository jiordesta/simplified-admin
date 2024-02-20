import React from "react";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 7500 }}
      />
      <Homepage />
    </Provider>
  );
}
