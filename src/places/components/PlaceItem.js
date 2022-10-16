import { Card } from '@mui/material'
import React, { useState } from 'react'
import './PlaceItem.css'
import Button from '../../shared/FormElements/Button'
import Modal from '../../shared/components/UIElemetns/Modal'
import Map from '../../shared/components/UIElemetns/Map'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PlaceItem = props => {
    const [showMap,setShowMap] = useState(false)
    const [del,setDel] = useState(false)
    const deleteState = () => {
      setDel(prevMode => !prevMode)
    }
    const openMapHandler = () => {
        setShowMap(true)
    }
    const closeMapHandler = () => {
        setShowMap(false)
    }
    
    return (
      <React.Fragment>
        <Modal
          show={showMap}
          onCancel={closeMapHandler}
          header={props.address}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={<Button onClick={closeMapHandler}>Close</Button>}
        >
            <div className='map-container'>
                <Map center={props.coordinates} zoom={16} />
            </div>
        </Modal>
        <li className="place-item">
          <Card className="place-item__content">
            <div className="place-item__image">
              <img src={props.image} alt={props.title} />
            </div>
            <div className="place-item__info">
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
              <Button inverse onClick={openMapHandler}>View On Map</Button>
              <Button to={`/places/${props.id}`}>Edit</Button>
              <Button danger onClick={deleteState}>Delete</Button>
            </div>
          </Card>
        </li>
        <Dialog
        open={del}
        onClose={deleteState}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pressing "Yes" will permanently delete this place and you wont be able to retrieve the data of it
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteState}>No</Button>
          <Button onClick={deleteState} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
    );
}

export default PlaceItem