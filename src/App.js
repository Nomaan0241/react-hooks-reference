import UseStateHook from "./allHooks/UseStateHook";
import UseEffectHook from "./allHooks/UseEffectHook";
import UseMemoHook from "./allHooks/UseMemoHook";
function App() {
	return (
		<div className="App">
			<UseMemoHook />
			{/* <UseEffectHook /> */}
			{/* <UseStateHook /> */}
		</div>
	);
}

export default App;
