import { Form, InputGroup, FormControl, Button } from '../../imports.js';

const SearchBox = () => {
  return (
    <Form className="d-flex me-auto w-50">
      <InputGroup>
        <FormControl type="text" name="q" id="q" placeholder="Search for products" aria-describedby="button-search"></FormControl>
        <Button variant="outline-primary" id="button-search">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBox