import React, { useState } from "react";
import { Input } from "./components/Input";
import { Indicator } from "./components/Indicator";

export const App = () => {
	const [password, setPassword] = useState("");

	return (
		<div className="app-wrapper">
			<Input setPassword={setPassword} />
			<Indicator password={password} />
		</div>
	);
};
