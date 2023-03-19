import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import MovieContextProvider from "./context/MovieContext";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <MovieContextProvider>
        <AppRouter/>
        <ToastContainer/>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
