# Dog API Clone

A simple full-stack dog image application built with **Node.js**, **Express**, **HTML**, **CSS**, and **JavaScript**.

Users can choose a dog breed and display a random image of that breed. After a breed is selected, the image automatically changes every five seconds.

## Features

- Displays a list of available dog breeds
- Returns a random dog image for the selected breed
- Automatically changes the image every five seconds
- Handles invalid breed names
- Includes a simple REST API
- Serves the frontend using Express

## Supported Breeds

- Labrador
- Beagle
- Pug
- German Shepherd

## Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML
- CSS

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/prashantsah2061/dog-api-clone.git
```

### 2. Open the project folder

```bash
cd dog-api-clone
```

### 3. Install the dependencies

```bash
npm install
```

## Running the Application

Start the server with:

```bash
node index.js
```

The application will run at:

```text
http://localhost:3000
```

Open this address in your web browser.

## API Endpoints

### Get All Breeds

```http
GET /breeds
```

Example request:

```text
http://localhost:3000/breeds
```

Example response:

```json
[
  "labrador",
  "beagle",
  "pug",
  "germanshepherd"
]
```

### Get a Random Dog Image

```http
GET /image/:breed
```

Replace `:breed` with one of the supported breed names.

Example request:

```text
http://localhost:3000/image/labrador
```

Example response:

```json
{
  "image": "/img/labrador1.png"
}
```

Another example:

```text
http://localhost:3000/image/germanshepherd
```

### Invalid Breed

When a breed is not available, the API returns a `404` response.

Example request:

```text
http://localhost:3000/image/husky
```

Example response:

```json
{
  "error": "Breed not found"
}
```

## Project Structure

```text
dog-api-clone/
├── public/
│   ├── img/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Demo

[View the project demo video](https://github.com/prashantsah2061/dog-api-clone/blob/main/Screen%20Recording%202025-03-02%20at%2011.01.48%20PM.mov)

## Author

**Prashant Sah**

GitHub: [prashantsah2061](https://github.com/prashantsah2061)
