const SELECT_COUNTRY = "SELECT_COUNTRY";
export const selectCountry = (countryName) => ({
    type: SELECT_COUNTRY,
    countryName,
});

const TOGGLE_THEME = "TOGGLE_THEME";
export const toggleTheme = (themeType) => ({
    type: TOGGLE_THEME,
    themeType,
});
