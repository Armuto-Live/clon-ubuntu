import { createContext, useState } from "react";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const [indexViewNavbar, setIndexViewNavbar] = useState(null);
    const [checkedCollapse, setCheckedCollapse] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [buttonSearch, setButtonSearch] = useState(false);

    const openModal=()=> {
        setIsOpenModal(true);
    };

    const closeModal=()=> {
        setIsOpenModal(false);
        if(indexViewNavbar!=null){
            setCheckedCollapse(false);
        }
        if(buttonSearch){
            setButtonSearch(false);
        }
    };

    const value={
        indexViewNavbar,
        setIndexViewNavbar,
        checkedCollapse,
        setCheckedCollapse,
        isOpenModal,
        setIsOpenModal,
        openModal,
        closeModal,
        buttonSearch,
        setButtonSearch
    }
    return <DataContext.Provider value={value}> {children} </DataContext.Provider>
}