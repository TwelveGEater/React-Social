export const updateObjectInArray = (array, itemID, objProp, newObjProp) => {
	return array.map((u) => {
		if (u[objProp] === itemID) {
			return { ...u, ...newObjProp };
		}

		return u;
	});
};
