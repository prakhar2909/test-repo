# MERN Shoe Sales Website

A full-stack e-commerce website for selling shoes built with MongoDB, Express, React, and Node.js.

## Features

- 🛍️ Product listing with filtering (category, brand, price range)
- 🔍 Product detail pages
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🎨 Modern UI with gradient designs

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Styling**: CSS3 with modern design patterns

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shoesdb
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

### Seed Database (Optional)

To populate the database with sample products:

```bash
cd backend
node seed.js
```

## API Endpoints

- `GET /api/products` - Get all products (supports query filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## Project Structure

```
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   ├── seed.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   └── Cart.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Usage

1. Make sure MongoDB is running
2. Start the backend server
3. Start the frontend server
4. Open `http://localhost:3000` in your browser
5. Browse products, add to cart, and explore the features!

## License

ISC

