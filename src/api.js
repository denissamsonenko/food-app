import axios from "axios";
import API_URL from "./config";

const getMealById = async (mealId) => {
    const response = await axios.get(API_URL + `lookup.php?i=` + mealId);
    return await response.data;
}

const getAllCategories = async () => {
    const response = await axios.get(API_URL + `categories.php`);
    return await response.data;
}

const getFilteredCategory = async (categoryName) => {
    const response = await axios.get(API_URL + 'filter.php?c=' + categoryName);
    return await response.data;
}

export {getMealById, getAllCategories, getFilteredCategory};
