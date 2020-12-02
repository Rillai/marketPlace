import React, { useRef } from 'react'
import { GeolocationControl, Map, SearchControl, YMaps } from 'react-yandex-maps'

export function OrderThree(props) {
    const searchRef = useRef('');
    const lastStep = () => {
        if (searchRef.current) {
            let adress = searchRef.current.state.getAll().inputValue
            if (adress) {
                if (window.confirm(`Это ваш адрес? ${adress}`)) {
                    props.navigate(3, adress)
                }
            }
        }
    }
    return (
        <YMaps query={{ apikey: 'd5be9f57-5000-4836-8a5e-364c943f0b3b', lang: 'ru_RU' }}>
            <div className='map'>
                <div className='nextStep-panel'>
                    <h2>Укажите ваш адрес</h2>
                    <button onClick={() => lastStep()}>Далее</button>
                </div>
                <Map width='100%' height='600px' defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                    <GeolocationControl options={{ float: 'left' }} />
                    <SearchControl options={{ float: 'right' }} instanceRef={ref => { if (ref) searchRef.current = ref; }} />
                </Map>
            </div>
        </YMaps>
    )
}