import React, { memo, useState } from "react";

const InputComponent = ({ setPassword }) => {
	const [type, setType] = useState(true);

	return (
		<div className="input-wrapper">
			<input
				type={type ? "password" : "text"}
				placeholder="Type password"
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button onClick={() => setType(!type)}>
				<span className="show">{type ? "SHOW" : "HIDE"}</span>
			</button>
		</div>
	);
};

export const Input = memo(InputComponent);
