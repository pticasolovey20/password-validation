import React, { useState } from "react";
import { testPassword } from "../services/testPassword";

export const PasswordValidation = () => {
	const [type, setType] = useState(true);
	const [password, setPassword] = useState("");

	return (
		<div className="wrapper">
			<div className="input-wrapper">
				<input
					type={type ? "password" : "text"}
					placeholder="Type password"
					onChange={(event) => setPassword(event.target.value)}
				/>
				<span className="show" onClick={() => setType(!type)}>
					{type ? "SHOW" : "HIDE"}
				</span>
			</div>
			<div className="indicator">
				{testPassword(password).map((color, index) => (
					<span key={index} style={{ backgroundColor: `${color}` }}></span>
				))}
			</div>
		</div>
	);
};
