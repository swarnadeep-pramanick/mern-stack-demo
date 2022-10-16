
import React,{ useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './NewPlace.css'
import { useParams } from 'react-router-dom'

const EditPlace = () => {
    const placeId = useParams().placeId
    const place = {
        id:"p1",
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
    const [formValue,setFormValue] = useState({
        title:place.title,
        description:place.description
    })
    const handleChange = event => {
        const name = event.target.name
        const values = event.target.value
        setFormValue({...formValue, [name]:values})
        // console.log('test',formValue)
    }
    const placeSubmitHandler = e => {
        const newData = {...formValue}
        console.log(newData)
    }
        
    if(place.id === placeId){
        return (<form className="place-form" onSubmit={placeSubmitHandler}>
        <Box>
            <TextField
            id="outlined-multiline-flexible"
            name='title'
            label="Title"
            sx={{
                width: '100%',
                marginBottom: '15px'
            }}
            multiline
            maxRows={4}
            value={formValue.title}
            onChange={handleChange}
            />
        </Box>
        <Box>
        
        <TextField
          id="filled-multiline-static"
          label="Description"
          name="description"
          sx={{
            width:'100%',
            marginBottom: '15px'    
        }}
          multiline
          rows={4}
          defaultValue={formValue.description}
          onChange={handleChange}
          variant="filled"
        />
        </Box>
        <Box>
            <Button variant="outlined" onClick={placeSubmitHandler}>Update Location</Button>
        </Box>
        
        {/* <Input type='text' label='Description' element='description' errorText={`Please Enter A Valid Description`}/> */}
    </form>)
    }
    else{
        return (<form className="place-form"><h4>Unknown Place</h4></form>)
    }
}

export default EditPlace