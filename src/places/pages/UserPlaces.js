import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const UserPlaces = ()  => {
  const places = [
    {id:"p1",
    title:"Empire Building",
    description:"New York",
    address:"NY city",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3VVDMNZlYn4QzAsUx0P-dC_e5ip6nuD4tJMBtc3jtXKIvD_BYXsJ8BZ5Tzc-GvnQs-8&usqp=CAU",
    creatorId:'u1',
    location:{
      lat:23.1745,
      lng: 88.5606
    }
  }
  ]
  const userId = useParams().userId
  const loadPlaces = places.filter(place => place.creatorId === userId)
  return (
    <PlaceList items={loadPlaces} />
  )
}

export default UserPlaces