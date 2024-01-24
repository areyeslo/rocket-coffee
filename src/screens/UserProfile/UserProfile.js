import React, {useState, useEffect} from 'react'
import Card from '../../components/atoms/Card';
import Heading from '../../components/atoms/Heading';
import Text from '../../components/atoms/Text';

import { statusTypes } from '../../components/patterns/ProductList';

function UserProfile() {
  const [user, setUser] = useState({
    data: undefined,
    status: statusTypes.loading
  });

  useEffect(()=> {
    const getData = async () => {
      try {
        const profileFetch = await fetch('/api/profile/');
        const userResponse = await profileFetch.json();
        setUser({data: userResponse, status: statusTypes.loaded})
      } catch (error) {
        console.error(error);
        setUser({data: undefined, status: statusTypes.errored})
      }
    }

    getData();
  },[]);

  if(!user.data) { return null }
  
  return (
    <Card>
      <Heading level={2}>{user.data.name}</Heading>
      <Text>{user.data.memberSince}</Text>
      <Heading level={3}>Recent Orders
        <ul>
          {user.data.recentOrders.map(order => <li key={order.id}>{order.name}</li>)}
        </ul>
        </Heading>
    </Card>
  )
}

export default UserProfile