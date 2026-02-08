# 📁 File Sharing System

A simple and elegant full-stack web application built with the MERN stack that allows users to upload files and generate shareable download links instantly.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node.js-v18+-brightgreen)
![React](https://img.shields.io/badge/React-v19.2.4-blue)

## ✨ Features

- 🚀 **One-Click Upload** - Simple and intuitive file upload interface
- 🔗 **Instant Share Links** - Generate shareable download links immediately after upload
- 📊 **Download Tracking** - Monitor how many times each file has been downloaded
- 💾 **Persistent Storage** - Files stored securely on the server with metadata in MongoDB
- 🎨 **Clean UI** - Modern and responsive user interface
- ⚡ **Auto-Upload** - Files automatically upload upon selection
- 🔒 **Unique File IDs** - Each upload gets a unique identifier for security

## 🛠️ Tech Stack

### Frontend
- **React** (19.2.4) - UI library
- **Axios** - HTTP client for API requests
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** (5.2.1) - Web framework
- **MongoDB** - Database for file metadata
- **Mongoose** (9.1.6) - MongoDB ODM
- **Multer** (2.0.2) - File upload middleware
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (or local MongoDB installation)

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/file-sharing-system.git
cd file-sharing-system
```

### 2. Setup Backend (Server)
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=file-sharing
```

### 3. Setup Frontend (Client)
```bash
cd ../client
npm install
```

## 🎯 Usage

### Start the Backend Server
```bash
cd server
npm start
```
Server will run on **http://localhost:8000**

### Start the Frontend
```bash
cd client
npm start
```
Client will run on **http://localhost:3000**

### Access the Application
Open your browser and navigate to **http://localhost:3000**

## 📁 Project Structure

```
File_Sharing_System/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── services/
│   │   │   └── api.js     # API service functions
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Application styles
│   │   └── index.js       # React entry point
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── controller/
│   │   └── image-controller.js  # Upload/Download logic
│   ├── database/
│   │   └── db.js          # MongoDB connection
│   ├── models/
│   │   └── file.js        # File schema
│   ├── routes/
│   │   └── routes.js      # API routes
│   ├── utils/
│   │   └── upload.js      # Multer configuration
│   ├── uploads/           # Uploaded files storage
│   ├── .env               # Environment variables
│   ├── index.js           # Server entry point
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Upload File
```http
POST /upload
Content-Type: multipart/form-data

Body:
- file: <file>
- name: <filename>

Response:
{
  "path": "http://localhost:8000/file/<fileId>"
}
```

### Download File
```http
GET /file/:fileId

Response: File download
```

## 🎨 How It Works

1. **User selects a file** → Triggers hidden file input
2. **File auto-uploads** → React's `useEffect` detects file selection
3. **FormData created** → Contains file and filename
4. **POST request sent** → Axios sends to `/upload` endpoint
5. **Server processes** → Multer saves file, MongoDB stores metadata
6. **Link generated** → Unique URL returned to frontend
7. **User shares link** → Recipients can download via unique URL
8. **Download tracked** → Counter increments on each download

## 🔐 Environment Variables

Create a `.env` file in the `server` directory:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Add file size limits
- [ ] Implement file expiration dates
- [ ] Add password protection for files
- [ ] Support for multiple file uploads
- [ ] Add file type restrictions
- [ ] Implement user authentication
- [ ] Add file preview functionality
- [ ] Dark mode support
- [ ] Download limit per file
- [ ] QR code generation for share links

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Akash**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Inspiration from various file-sharing services
- MERN stack community
- Icons and images from their respective sources

---

⭐ **Star this repo if you find it helpful!**
