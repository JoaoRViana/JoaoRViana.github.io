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
    backgroundButtonRepositorio:'bg-blue-500 hover:brightness-150 border-blue-700',
    backgroundDeploy:'bg-green-500 hover:brightness-150 disabled:bg-gray-300 disabled:brightness-100 border-green-700 disabled:border-b-0',
    backgroundButtonOverAll:'bg-yellow-500 hover:brightness-150 border-yellow-700',
}

const darkMode = {
    name:'darkMode',
    background: 'bg-gray-900',
    textName:'text-green-500',
    textOverAll:'text-gray-200',
    backgroundAboutMe:'bg-gray-300',
    titleTextProject:'text-yellow-600',
    textAboutMe:'text-gray-800',
    textCardProject:'text-slate-200',
    backgroundCardProjects:'bg-slate-700',
    backgroundButtonRepositorio:'bg-sky-500 hover:brightness-150 border-sky-700',
    backgroundDeploy:'bg-teal-500 hover:brightness-150 disabled:bg-slate-700 disabled:brightness-100 border-teal-700 disabled:border-b-0',
    backgroundButtonOverAll:'bg-amber-500 hover:brightness-150 border-amber-700',

}


const initialState={
  value: darkMode,
  section:0,
};

export const changeTheme = createSlice({
    name:'changeTheme',
    initialState,
    reducers:{
        change: (state) => {
            state.value = state.value.name === 'lightMode' ? darkMode : lightMode;
          },
        otherSection:(state,param)=>{
            const {payload} = param
            state.section = payload
        }
    }
})

export const {change} = changeTheme.actions
export const {otherSection} = changeTheme.actions;
export default changeTheme.reducer;