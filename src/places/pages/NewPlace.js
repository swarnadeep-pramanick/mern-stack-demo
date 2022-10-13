import React,{ useState } from "react";
// import Input from "../../shared/FormElements/Input";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './NewPlace.css'

const NewPlace = () => {
    let formData = {}
    const [formValue,setFormValue] = useState({
        title:'',
        description:''
    })
    const handleChange = event => {
        const name = event.target.name
        const values = event.target.value
        setFormValue({...formValue, [name]:values})
        // console.log('test',formValue)
    }
    const placeSubmitHandler = e => {
        const newData = {... formValue}
        console.log(newData)
    }
        
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
            <Button variant="outlined" onClick={placeSubmitHandler}>Save Location</Button>
        </Box>
        
        {/* <Input type='text' label='Description' element='description' errorText={`Please Enter A Valid Description`}/> */}
    </form>)
}
export default NewPlace