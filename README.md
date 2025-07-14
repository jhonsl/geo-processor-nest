# 🧭 Geo Processor Backend (NestJS)

This project was deployed on Render.com and is available at: [Geo Processor Backend](https://geo-processor-nest.onrender.com)

This is the **backend service** for the Geo Processor App. It receives a list of geographic coordinates (latitude and longitude), calculates:

- ✅ The **bounding box** (north, south, east, west)
- ✅ The **geographic centroid**
  
And returns the computed values to the frontend client.

---

## 📂 Project Structure

This service is built using **NestJS (TypeScript)** with a clean modular structure:

---

## ▶️ Running the API Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/geo-processor-backend.git
cd geo-processor-backend
```

2. **Install dependencies**

```bash
npm install
yarn install
``` 

3. **Set up environment variables**
Create a `.env` file in the root directory with the following content:

```plaintext
BACKEND_URL=http://localhost:8000
```

4. **Start the server**

```bash
npm run start:dev
```

5. **Access the API**
Open your browser and go to `http://localhost:8000` to access the API documentation
via Swagger UI. You can also use tools like Postman or cURL to test the endpoints.