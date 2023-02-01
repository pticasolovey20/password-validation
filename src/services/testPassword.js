export const testPassword = (password) => {
	const validRegExp = [
		/[a-zA-Z]|\d|[!,@,#,$,%,^,&,*,(,)]/,
		/(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[!,@,#,$,%,^,&,*,(,)])|(?=.*\d)(?=.*[!,@,#,$,%,^,&,*,(,)])/,
		/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!,@,#,$,%,^,&,*,(,)])/,
	];

	const empty = ["#8f8f8f", "#8f8f8f", "#8f8f8f"];
	const short = ["#ff4757", "#ff4757", "#ff4757"];
	const easy = ["#ff4757", "#8f8f8f", "#8f8f8f"];
	const medium = ["#f9f34f", "#f9f34f", "#8f8f8f"];
	const strong = ["#23ad5c", "#23ad5c", "#23ad5c"];

	let counter = 0;

	validRegExp.forEach((regExp) => {
		if (new RegExp(regExp).test(password)) {
			counter += 1;
		}
	});

	if (password.length > 0) {
		if (password.length < 8) {
			return short;
		} else {
			switch (counter) {
				case 1:
					return easy;

				case 2:
					return medium;

				case 3:
					return strong;

				default:
					return empty;
			}
		}
	} else {
		return empty;
	}
};
