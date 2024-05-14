import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Body from '../components/Body'

import SingleUser from '../components/SingleUser'

export default function SingleUserPage() {

  const [ viewedUser, setViewedUser ] = useState({})
  const { username } = useParams();
  console.log(username);

  useEffect(()=>{
    (async ()=>{
      await getUserData();
    })()
  },[])

  async function getUserData(){
    const response = await fetch('https://capstone-project1-q1ao.onrender.com/user/'.concat(username));
    if (response.ok){
      const userData = await response.json();
      console.log(userData);
      setViewedUser(userData);
    }
  }

  return (
    <Body sidebar>
      <Container>

        <h2>{username}s Page</h2>
        <SingleUser posts={viewedUser.posts}/>
      </Container>
    </Body>
  )
}