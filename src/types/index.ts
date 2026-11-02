

//this interface is the shape of the counter data
// the loadSavedCounterInfo helper function give this to the component
export default interface SavedCounterInfo{
    count: number;
    step: string;
    history: number[];
}