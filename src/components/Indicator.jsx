import React, { memo } from "react";
import { testPassword } from "../services/testPassword";

export const IndicatorComponent = ({ password }) => {
	return (
		<div className="indicator">
			{testPassword(password).map((color, index) => (
				<span key={index} style={{ backgroundColor: `${color}` }}></span>
			))}
		</div>
	);
};

export const Indicator = memo(IndicatorComponent);
