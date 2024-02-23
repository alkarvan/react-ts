import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/setState";

interface IProps {
    changeTrigger: () => void,
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar
}
const CarForm:FC<IProps> = ({changeTrigger, setCarForUpdate, carForUpdate}) => {

    const {reset,handleSubmit, register, setValue} = useForm<ICar>();

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand,{shouldValidate:true})
            setValue('price', carForUpdate.price,{shouldValidate:true})
            setValue('year', carForUpdate.year,{shouldValidate:true})
        }
    }, [carForUpdate, setValue])
    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger()
        reset()
    }

    const update: SubmitHandler<ICar> = async  (car) => {
        await carService.updateById(carForUpdate.id, car)
        changeTrigger()
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate? update:save)}>
            <input type="text" placeholder={'brand'} {...register("brand")}></input>
            <input type="text" placeholder={'price'} {...register("price")}></input>
            <input type="text" placeholder={'year'} {...register("year")}></input>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {CarForm};