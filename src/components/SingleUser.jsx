import { Container } from "react-bootstrap";
import Posts from '../components/Posts'

const SingleUser = ({ posts }) => {

  console.log(posts);

  return (
    <Container>
      <Posts />
    </Container>
  
  )
}

export default SingleUser;