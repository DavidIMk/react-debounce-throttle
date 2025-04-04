import { useState } from "react";
import { useDebounce, useThrottle } from "react-debounce-throttle";

function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const throttledValue = useThrottle(value, 500);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Debounce & Throttle Hooks Playground</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px", width: "300px" }}
      />
      <p>
        <strong>Debounced Value:</strong> {debouncedValue}
      </p>
      <p>
        <strong>Throttled Value:</strong> {throttledValue}
      </p>
    </div>
  );
}

export default App;
