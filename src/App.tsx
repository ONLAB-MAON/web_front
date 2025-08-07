import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyles";
import { ThemeProviderWrapper, useTheme } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";

import ThemeToggleButton from './components/ThemeToggleButton';
import Footer from './components/Footer';
import Terms from './pages/footer/Terms';
import Privacy from './pages/footer/Privacy';
import Support from './pages/footer/Support';

function App() {
  return (
    <Router>
      <ThemeProviderWrapper>
        <AppContent />
      </ThemeProviderWrapper>
    </Router>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return(
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeToggleButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;