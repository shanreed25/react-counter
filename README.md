# React Counter




### Build Counter
- [X] Create the project with Vite
- [X] Create `AdvancedCounter.tsx` and render it from `App.tsx`
- [X] In `AdvancedCounter.tsx` 
    - [X] add count state
    - [X] display the count
    - [X] add Increment and Decrement buttons
    - [X] implement the `increment()` and `decrement()` functions and pass them to the buttons

### Build Step Input
- [X] create state for step state
- [X] create number input
- [X] make the input a controlled input
    - [X] pass the step state to the value prop
- [X] create function to handle the step
    - [X] step value come from the input as a string so it needs to be converted to a number before the counter can use it
    - [X] set the step state using the input value converted to a number
- [X] in the increment and decrment functions use step value to update state 
    - instead of adding or subtracting using 1 or a hardcoded number use the step state


### Create a list of every count value and show that list on screen
- [X] create a state for the list
- [X] the list should contain all the count values starting with 0
    - update the history list state everytime count state changes
- [X] display the list on the screen
