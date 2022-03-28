export const validateCPRDate = (CPR: string, dateOfBirth: Date) => {
	const CPRDate = CPR.substring(0, 6);
	const lastYearDigits = ("" + dateOfBirth.getFullYear()).substring(2, 4);
	var day = ('0' + dateOfBirth.getDate()).slice(-2);
	var month = ('0' + (dateOfBirth.getMonth() + 1)).slice(-2);
	const formatedDate = day + month + lastYearDigits;

	if (CPRDate == formatedDate)
	{
		return true;
	}
	return false;
}