# 🛍️ Cartify: Smart E-Commerce Comparator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Cartify** is a dynamic, feature-rich React e-commerce frontend application. Unlike standard e-commerce clones, Cartify focuses on the **consumer decision-making process** by introducing a unique "Smart Comparison" feature, allowing users to analyze multiple products side-by-side to find the absolute best value based on price and ratings.

---

## 🎯 Executive Summary & Objectives

The primary objective of this project is to demonstrate a deep understanding of modern frontend development using React. The application fetches real-time data from an external API, manages complex global state (Cart & Comparisons), and provides a seamless, responsive User Experience (UX). 

**Key Goals Achieved:**
- 📡 **Real-World API Integration**: No hardcoded data; everything is fetched dynamically.
- 🧠 **Complex State Management**: Syncing data between the product list, the cart, and the comparison engine.
- ⚡ **Performance & UX**: Clean UI, fast routing, and immediate feedback (loading states).

---

## 🌟 Unique Selling Proposition (USP): Smart Comparison Engine

The defining feature of this capstone is the **Smart Comparison Page**. 
Instead of just adding items to a cart blindly, users can:
1. Select up to 4 different products from the catalog.
2. View them side-by-side on a dedicated comparison dashboard.
3. Automatically see the **Lowest Price** and **Highest Rating** highlighted by the smart logic engine.
4. Add the "Best Choice" directly to their cart from the comparison screen.

---

## ✨ Core Application Features

### 🛍️ Dynamic Product Discovery
- Fetches and displays products from the **Fake Store API**.
- Grid layout displaying high-quality images, titles, live pricing, and user ratings.

### 🔍 Advanced Search, Filter & Sort *(In Progress)*
- **Real-time Search**: Filter products by typing their name.
- **Category Filtering**: View only electronics, jewelery, or clothing.
- **Sorting Algorithm**: Arrange products by Price (Low/High) or User Rating.

### 🛒 Robust Shopping Cart
- Add, remove, and update quantities of items.
- Real-time mathematical calculation of the total cart value.
- Data persistence using browser `localStorage` (cart items survive page refreshes).

### 🌙 Global Theme Management *(Coming Soon)*
- Global Dark Mode / Light Mode toggle.
- Theme preferences saved to `localStorage`.

---

## 🧠 Technical Concepts Demonstrated

This project serves as a showcase for the following React and JavaScript concepts:

- **React Hooks**: Extensive use of `useState` (local state) and `useEffect` (API side-effects).
- **Context API (`useContext`)**: Global state management for the Cart and Comparison tools without prop-drilling.
- **React Router DOM**: Client-side routing for instantaneous page transitions (Home, Cart, Compare).
- **Advanced Array Methods**: Heavy use of `.map()`, `.filter()`, `.sort()`, and `.reduce()` for data manipulation and rendering.
- **Component Architecture**: Modular, reusable functional components to keep the codebase DRY (Don't Repeat Yourself).

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Global top navigation
│   └── ProductCard.jsx  # Individual product display component
├── pages/               # Main route views
│   ├── Home.jsx         # Landing page and product grid
│   ├── Cart.jsx         # Shopping cart checkout page
│   └── Compare.jsx      # Smart comparison dashboard
├── context/             # Global state providers (Cart, Theme)
├── App.jsx              # Main router and layout wrapper
└── index.css            # Global variables and styling
```

---
