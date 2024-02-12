import { useContext } from "react";
import TasksContext from "./tasks/tasksContext";
import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  // This component is only dependent on the counter property and it will re-render only if this property changes
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
