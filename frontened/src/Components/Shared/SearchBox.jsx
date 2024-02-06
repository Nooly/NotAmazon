import { Form, InputGroup, FormControl, Button, useState, useNavigate, useEffect, useLocation } from '../../imports.js';
import { getFilterURI } from '../../utils.js';

const SearchBox = () => {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (!query) return;
    // function to take query and return the correct path
    const filterURI = getFilterURI(search, { query: query });
    navigate(filterURI);
  }, [query]);

  const submitHandler = (e) => {
    e.preventDefault();
    const filterURI = getFilterURI(search, { query: query });
    navigate(filterURI);
  }

  return (
    <Form className="d-flex me-auto w-50" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl type="text" name="q" id="q" placeholder="Search for products" aria-describedby="button-search"
          onChange={(e) => setQuery(e.target.value)}></FormControl>
        <Button variant="outline-primary" id="button-search" type='submit'>
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBox;