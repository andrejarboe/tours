# Tours

[View Live Site](https://www.tours.andrejarboe.com)

This is a simple React application that displays a list of tours and allows the user to remove tours that they are not interested in. The tours are fetched from an API and displayed using the `Tours` and `Tour` components.

## Components

### App

The `App` component is the root component of the application. It manages the state for the list of tours and displays a loading screen while the data is being fetched. It also contains the `Tours` component and a refresh button in case the list of tours is empty.

### Tours

The `Tours` component is a functional component that takes in a prop `tours` and maps over the array to create a list of `Tour` components. It also receives a prop `removeTour` which is a function that removes a tour from the list when called.

### Tour

The `Tour` component is a functional component that displays the details of a single tour. It receives props for `id`, `image`, `info`, `name`, and `price`. It also receives a prop `removeTour` which is a function that removes the tour from the list when called. The component also contains a toggle to show/hide the full `info` text and a button to remove the tour.

## Data Fetching

The `App` component uses the `useEffect` hook to fetch the tours from the API when the component is mounted. The `fetchTours` function makes a `GET` request to the API and updates the state with the received data. The `useEffect` hook is called with an empty array as the second argument to ensure that it is only called on mount.

## State

The `App` component utilizes the `useState` hook to manage the state for the list of tours and a loading indicator. The `useState` hook returns an array with two elements: the current state value and a function to update the state. In this case, `tours` is the current state value for the list of tours and `setTours` is the function to update the state. The `isLoading` state value is a boolean that indicates whether the data is being fetched from the API. The `setLoading` function is used to update the `isLoading` state value.
