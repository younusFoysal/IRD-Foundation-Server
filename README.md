# API Documentation

## Project Overview
This project provides an API to interact with a SQLite database containing categories, subcategories, and duas. It is designed for efficient data retrieval and filtering to support applications that require multilingual support and structured data.

## Features
- Retrieve all categories with optional filtering by `cat_id`.
- Fetch subcategories filtered by `cat_id`.
- Access duas filtered by `cat_id` and/or `subcat_id`.
- Retrieve detailed information for a specific dua by its ID.
- Supports structured responses in JSON format.
- Error handling with informative messages.

## Base URL
```
http://localhost:3000
```

---

## Endpoints

### 1. Get All Categories
**URL:** `/categories`

**Method:** `GET`

**Query Parameters:**
- `cat` (optional): Filter by `cat_id`.

**Example Requests:**
- Fetch all categories:
  ```
  http://localhost:3000/categories
  ```
- Fetch categories by `cat_id`:
  ```
  http://localhost:3000/categories?cat=1
  ```

---

### 2. Get Subcategories by Category
**URL:** `/subcategories`

**Method:** `GET`

**Query Parameters:**
- `cat` (optional): Filter by `cat_id`.

**Example Requests:**
- Fetch all subcategories:
  ```
  http://localhost:3000/subcategories
  ```
- Fetch subcategories by `cat_id`:
  ```
  http://localhost:3000/subcategories?cat=1
  ```

---

### 3. Get Duas by Category or Subcategory
**URL:** `/duas`

**Method:** `GET`

**Query Parameters:**
- `cat` (optional): Filter by `cat_id`.
- `subcat` (optional): Filter by `subcat_id`.

**Example Requests:**
- Fetch all duas:
  ```
  http://localhost:3000/duas
  ```
- Fetch duas by `cat_id`:
  ```
  http://localhost:3000/duas?cat=1
  ```
- Fetch duas by `subcat_id`:
  ```
  http://localhost:3000/duas?subcat=1
  ```
- Fetch duas by both `cat_id` and `subcat_id`:
  ```
  http://localhost:3000/duas?cat=1&subcat=2
  ```

---

### 4. Get a Specific Dua by ID
**URL:** `/dua`

**Method:** `GET`

**Query Parameters:**
- `id` (required): The ID of the dua.

**Example Requests:**
- Fetch a specific dua:
  ```
  http://localhost:3000/dua?id=1
  ```

---

## Error Responses
For all endpoints, if an error occurs, the API will respond with:
```json
{
  "error": "Error message"
}
```

---

## How to Run the Server
1. Install dependencies:
   ```bash
   npm install express sqlite3
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Access the endpoints using the provided examples.

