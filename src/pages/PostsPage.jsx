import Body from '../components/Body'
import PostForm from '../components/forms/PostForm'

export default function PostPage() {
  return (
    <Body sidebar={false}>
      <PostForm /> 
    </Body>
  )
}