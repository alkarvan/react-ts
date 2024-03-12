import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";
import {validateActive} from "@reduxjs/toolkit/dist/listenerMiddleware/task";
import {fdatasyncSync} from "fs";

interface IState {
    cars:ICar[],
    carForUpdate:ICar,
    trigger: boolean
}
const initialState:IState = {
    cars:[],
    carForUpdate:null,
    trigger:null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, {car:ICar}>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const updateById = createAsyncThunk<{car:ICar}, {id:number, car:ICar}>(
    'carSlice/updateById',
    async ({id, carData}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, carData);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateById.fulfilled, state => {
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(create, updateById), state => {
                state.trigger = !state.trigger
            })
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById
}

export {
    carReducer,
    carActions
}