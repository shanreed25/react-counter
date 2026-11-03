# React Counter


##  Functionality
- [X] **Display Current Count:** Show the current count, initialized to 0.
- [X] **Increment Button:** A button to increase the count by 1.
- [X] **Decrement Button:** A button to decrease the count by 1.
- [X] **History Tracking:** Keep a history of all count values and display this history list to the user.
- [X] **Auto-Save Functionality:** Use useEffect to save the current count to local storage whenever it changes.
- [X] **Keyboard Event Listeners:** Allow the user to increment and decrement the count by pressing the ArrowUp/ArrowDown key.
- [X] **Reset Mechanism:** A button to reset the count back to 0 and clear the tracked history of counts.
- [X] **Step Input:** Input field where the user can define a custom “step” value then use this step value instead of 1.


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


### Saves the count to localStorage
- [X] save all three values together in localStorage
    - [X] create interface with a shape that has count, step and history
    - [X] create a loader function that will return count, step and history in the shape of the interface
    - [X] pass the loader function to the state
    - [X] use useEffect snd setTimeout to save the new values to localStorage

### Add Keyboard listeners
- [X] add a useEffect that
- [X] listens for arrow keys
- [X] when up arrow is pressed increment
- [X] when down arrow is pressed decrement
- [X] adds an event listener for `keydown` with logic to handle them
- [X] add remove event listener as a clean up function for the useEffect
- [X] the useEffect should rerun when the increment or decrement functions changes