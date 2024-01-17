Build a Clock
In today's assignment we're going to practice using state in React by building a clock

How to complete this assignment
Project setup
In the terminal, "cd" into the folder of your project and install dependencies by running npm install. Once that's done, you can start the project by running npm run dev.

Part one - Create a clock in App.jsx
Use new Date().toLocaleTimeString() as clock state to show the current time.
Use setInterval to update state every 1000 ms. setInterval should be called inside useEffect.
Part two - Create a clock component
Move your clock code into a component and give your clock two props: city and timeZone.
Use the city prop to show the city title of the clock and the timeZone prop to show time at that timezone.
Part three - Create a timer
Set a starting time state in seconds and count down the number of seconds with setInterval. Calculate minutes and seconds from the remaining number of seconds and show the user.

The timer should stop when it reaches zero.

Part four - Create a timer component
The component should have starting time as a prop. Create a few timers with different starting time and add them to App.jsx.
# ClockApp
