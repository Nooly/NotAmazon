import {Spinner} from '../../imports.js'

const Loading = () => {
  return (
    <Spinner animation='border' role='status'><span className='visually-hidden'>Loading...</span></Spinner>
  )
}

export default Loading