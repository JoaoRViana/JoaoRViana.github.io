import { createSlice } from "@reduxjs/toolkit";


const lightMode = {
    name:'lightMode',
    background: 'bg-slate-200',
    textName:'text-blue-500',
    backgroundAboutMe:'bg-gray-100',
    textOverAll:'text-black',
    textAboutMe:'text-gray-700',
    titleTextProject:'text-orange-600',
    textCardProject:'text-gray-800',
    backgroundCardProjects:'bg-gray-300',
    backgroundButtonRepositorio:'bg-blue-500 hover:brightness-150',
    backgroundDeploy:'bg-green-500 hover:brightness-150 disabled:bg-gray-300 disabled:brightness-100',
}

const darkMode = {
    name:'darkMode',
    background: 'bg-black',
    textName:'text-green-500',
    textOverAll:'text-gray-200',
    backgroundAboutMe:'bg-gray-300',
    titleTextProject:'text-yellow-600',
    textAboutMe:'text-gray-800',
    textCardProject:'text-slate-200',
    backgroundCardProjects:'bg-slate-700',
    backgroundButtonRepositorio:'bg-sky-500 hover:brightness-150',
    backgroundDeploy:'bg-yellow-500 hover:brightness-150 disabled:bg-slate-700 disabled:brightness-100',
}


const initialState={
  value: lightMode,
};

export const changeTheme = createSlice({
    name:'changeTheme',
    initialState,
    reducers:{
        change: (state) => {
            state.value = state.value.name === 'lightMode' ? darkMode : lightMode;
          },
    }
})

export const {change} = changeTheme.actions
export default changeTheme.reducer;