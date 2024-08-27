import ReactDOM from "react-dom/client";
import App from "./App";
import TodoApp from '@components/TodoApp';
export { TodoApp };

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  throw new Error("Root not found.");
}
export default TodoApp;  
