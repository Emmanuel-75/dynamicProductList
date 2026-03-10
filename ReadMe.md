# Dynamic Product List

This project focuses on mastering JavaScript array methods and dynamic DOM rendering by building a Dynamic Product List. It demonstrates how to transform, filter, and aggregate data using map, filter, and reduce, while updating the UI in real time through category filters and a search bar. The interface dynamically renders products, filters them instantly, and calculates the total price of displayed items.

## Features
- Dynamic Product Rendering: 
Products are generated dynamically from a JavaScript array using a <template> element and rendered into the DOM, ensuring a clean and reusable UI structure.
- Category Filtering: 
Users can filter products by category using interactive filter buttons. Multiple categories can be selected simultaneously for more flexible filtering.
- Real-Time Search: 
A search bar allows users to filter products instantly by name as they type, demonstrating real-time UI updates.
- Total Price Calculation: 
The total price of all visible products is calculated automatically using reduce() and updated whenever filters or search queries change.
- Graceful “No Results” State: 
If no products match the current filters or search query, a clear message is displayed indicating that no results were found.
- Tailwind CSS Styling & Animations: 
The UI uses Tailwind CSS utilities for responsive layouts, hover effects, rounded cards, shadows, and smooth transitions.
- Responsive Grid Layout: 
Products adapt across screen sizes using Tailwind’s grid system, ensuring a clean layout on mobile, tablet, and desktop devices.
- Efficient Event Handling: 
Event delegation is used for handling filter button interactions efficiently through a single container listener.

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (Vanilla JS)

## Purpose

This project reinforces key frontend engineering concepts:

- Transforming data using map()
- Filtering datasets with filter()
- Aggregating values using reduce()
- Rendering dynamic content in the DOM
- Implementing real-time search functionality
- Managing UI state with filters and user input
- Structuring JavaScript code for maintainability
- Designing responsive interfaces with Tailwind CSS

## How to Use
Download the file and run `npm run dev` in the terminal or Tap on the live link associated with this folder