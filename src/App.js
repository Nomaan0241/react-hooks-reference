import UseStateHook from "./allHooks/UseStateHook";
import UseEffectHook from "./allHooks/UseEffectHook";
import UseMemoHook from "./allHooks/UseMemoHook";
import UseRefHook from "./allHooks/UseRefHook";
function App() {
	return (
		<div>
			<UseRefHook />
			{/* <UseMemoHook /> */}
			{/* <UseEffectHook /> */}
			{/* <UseStateHook /> */}
		</div>
	);
}

export default App;
