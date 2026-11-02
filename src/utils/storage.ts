import type SavedCounterInfo from "../types";

/*
runs only on first render by passing it to useState like
useState(() => loadSavedCounterInfo().count)
useState(() => loadSavedCounterInfo().step)
useState(() => loadSavedCounterInfo().history)
passing it like useState(loadSavedCounterInfo().step)
would called loadSavedCounterInfo() three times 
so localStorage would gets read and parsed three times 
on every render

*/
export default function loadSavedCounterInfo(): SavedCounterInfo{
    /*
    gets the saved counter data from localStorage
    returns it as the SavedCounterInfo interface shape
    */
    const savedCounterInfo = localStorage.getItem("reactCounter");

    //used for when nothing is saved in localStorage
    const startingCounterInfo: SavedCounterInfo = {count: 0, step: "1", history:[0]}

    //if nothing is in localStroage
    if (!savedCounterInfo){
        return startingCounterInfo
    }
    
    // turn the saved text back into an object, because localStorgae store it as a string
    const parsedInfo = JSON.parse(savedCounterInfo);
    const saveParsedCounterInfo: SavedCounterInfo = {
        //coun, step and countHistory, are the state values that need to be used here
        //because the component saves it as const counterData = {count, step, countHistory}
        count: parsedInfo.count,
        step: parsedInfo.step,
        history: parsedInfo.countHistory
    }

    // console.log(saveParsedCounterInfo);

    return saveParsedCounterInfo

}