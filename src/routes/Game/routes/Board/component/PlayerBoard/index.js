import React, { useState } from 'react'
import cn from 'classnames'
import PokemonCard from '../../../../../../components/PokemonCard'
import s from './style.module.css'

const PlayerBoard = ({player, cards, onClickCard }) => {
    const [isSelected, setselected] = useState()
    return (
        <div>
            {cards.map((item) =>
                <div 
                    className={cn(s.card, {
                        [s.selected]: isSelected === item.id
                    })}
                    onClick={() => {
                        setselected(item.id);
                        onClickCard && onClickCard({
                            player,
                            ...item,
                        })
                    }}
                >
                    <PokemonCard
                        key={item.id} 
                        name={item.name} 
                        id={item.id} 
                        type={item.type}
                        values={item.values}
                        img={item.img}
                        minimize
                        isActive={true}
                        className={s.card}
                    />
                </div> 
                
            )}
        </div>
    )
}

export default PlayerBoard;