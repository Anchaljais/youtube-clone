export const API_KEY = 'AIzaSyDrHLQT_Qke_Fh382Gbva-aeNcx8Uxj50A';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};
