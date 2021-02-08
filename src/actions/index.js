const SELECT_COUNTRY = "SELECT_COUNTRY";
export const selectCountry = (countryName) => ({
    type: SELECT_COUNTRY,
    countryName,
});
