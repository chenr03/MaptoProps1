import React from 'react'
import { Container, Paper, Chip } from '@mui/material';
// import cars from '../cars.json' // remove this
// import { Link } from 'react-router-dom'

const Car = (props) => {
    console.log(props);
    const id = props.match.params.id

    const car = props.cars.find(c => c.id === +id)
    console.log(car);
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                {
                   Object.keys(car).map((key, id) => {

                       console.log(key, id)
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car