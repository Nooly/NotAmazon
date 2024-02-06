import { searchPageReducer } from "../Reducers/searchPageReducer.jsx";
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from "../actions.jsx";
import { axios, toast, useEffect, useLocation, useNavigate, useReducer, useState } from "../imports.js";
import { getError } from "../utils.js";

const prices = [{ name: "$1-$50", value: "1-50" }, { name: "$51-$200", value: "51-200" }, { name: "$201-$1000", value: "201-1000" }];

const ratings = [{ name: "4 stars and up", rating: 4 }, { name: "3 stars and up", rating: 3 }, { name: "2 stars and up", rating: 2 }, { name: "1 stars and up", rating: 1 }];

const Search = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const category = searchParams.get('category') || 'all';
    const query = searchParams.get('query') || 'all';
    const price = searchParams.get('price') || 'all';
    const rate = searchParams.get('rate') || 'all';
    const order = searchParams.get('order') || 'newest';
    const page = searchParams.get('page') || 1;

    const [{ loading, error, products, pages, countProducts }, dispatch] = useReducer(searchPageReducer, { loading: true, error: "" });

    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await axios.get('/api/v1/products/categories');
                setCategories(data);
            } catch (error) {
                toast.error(getError(error));
            }
        }
        getCategories();
    }, [])


    useEffect(() => {
        const getProducts = async () => {
            try {
                dispatch({ type: GET_REQUEST });
                const { data } = await axios.get(`/api/v1/products/search?category${category}&query=${query}
                &price=${price}&rate=${rate}&order=${order}&page=${page}`);
                dispatch({ type: GET_SUCCESS, payload: data });
            } catch (error) {
                dispatch({ type: GET_FAIL, payload: getError(error) });
            }
        };
        getProducts();
    }, [category, query, price, rate, order, page]);

    return (
        <div>

        </div>
    )
}

export default Search;