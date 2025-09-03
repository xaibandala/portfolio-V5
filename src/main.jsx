import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from "./App.jsx"
import "./index.css"

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
  offset: 100
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
