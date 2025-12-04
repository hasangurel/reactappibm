# Paradise Nursery - Shopping Cart Application

A React-based shopping cart application for an online plant shop featuring aromatic, medicinal, and air-purifying houseplants.

## Features

### Landing Page
- Background image with overlay
- Company name and description
- "Get Started" button linking to product listing page

### Product Listing Page
- 9 unique houseplants organized into 3 categories:
  - Aromatic Plants (Lavender, Rosemary, Mint)
  - Medicinal Plants (Aloe Vera, Chamomile, Holy Basil)
  - Air Purifying Plants (Snake Plant, Spider Plant, Peace Lily)
- Each plant displays thumbnail, name, description, and price
- Add to Cart button that:
  - Increases shopping cart icon count
  - Becomes disabled after adding
  - Adds the plant to the shopping cart

### Header/Navigation
- Displays on all pages except landing page
- Shopping cart icon with badge showing total item count
- Navigation links to Home, Products, and Cart pages

### Shopping Cart Page
- Shows total number of items in cart
- Displays total cost of all items
- Each cart item shows:
  - Thumbnail image
  - Plant name
  - Unit price
  - Subtotal
  - Quantity controls (increase/decrease buttons)
  - Delete button
- Continue Shopping button (links to products page)
- Checkout button (displays "Coming Soon" message)

## Technologies Used

- React 18
- Redux Toolkit (for state management)
- React Router DOM (for navigation)
- Vite (build tool)

## Installation

1. Navigate to the project directory:
```bash
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

### Setup Instructions:

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The workflow will automatically deploy your app when you push to the main branch

### Manual Deployment:

If you prefer to deploy manually:

```bash
npm run build
```

Then deploy the `dist` folder to your hosting service of choice.

### Important Note:

If your repository name is different from "paradise-nursery", update the `base` property in `vite.config.js`:

```javascript
base: '/your-repo-name/',
```

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── PlantCard.jsx
│   │   ├── PlantCard.css
│   │   ├── CartItem.jsx
│   │   └── CartItem.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── ProductListPage.jsx
│   │   ├── ProductListPage.css
│   │   ├── CartPage.jsx
│   │   └── CartPage.css
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── data/
│   │   └── plantsData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Redux Store Structure

The application uses Redux Toolkit with the following state structure:

```javascript
{
  cart: {
    items: [],
    totalQuantity: 0
  }
}
```

### Actions
- `addToCart` - Adds a plant to the cart
- `removeFromCart` - Removes a plant from the cart
- `increaseQuantity` - Increases quantity of a plant in cart
- `decreaseQuantity` - Decreases quantity of a plant in cart

## License

This project is created as part of a React learning module.
"# reactappibm" 
