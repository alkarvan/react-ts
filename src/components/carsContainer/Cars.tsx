import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {carActions} from "../../store";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    }, [trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};