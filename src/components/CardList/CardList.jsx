import React from 'react'
import Card from '../Card/Card'
import './CardList.css'
const CardList = ({ monsters }) => {
    return (
        <div className='card-list'>
            {
                monsters.map(monster => <Card
                    monster={monster} />)
            }
        </div>
    )
}

export default CardList