# 📁 File Sharing System

A simple and elegant full-stack web application built with the MERN stack and deployed on AWS that allows users to upload files and generate shareable download links instantly.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![AWS](https://img.shields.io/badge/Cloud-AWS-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node.js-v18+-brightgreen)
![React](https://img.shields.io/badge/React-v19.2.4-blue)

## 🌐 Live Demo

**🔗 [http://34.228.79.163](http://34.228.79.163)**

Try it now! Upload files and share download links instantly.

## ✨ Features

- 🚀 **One-Click Upload** - Simple and intuitive file upload interface
- 🔗 **Instant Share Links** - Generate shareable download links immediately after upload
- ☁️ **AWS S3 Storage** - Scalable cloud storage for unlimited files
- 📊 **Download Tracking** - Monitor how many times each file has been downloaded
- 💾 **Persistent Storage** - Files stored securely in AWS S3 with metadata in MongoDB
- 🎨 **Clean UI** - Modern and responsive user interface
- ⚡ **Auto-Upload** - Files automatically upload upon selection
- 🔒 **Unique File IDs** - Each upload gets a unique identifier for security
- 🌍 **Production Ready** - Deployed on AWS EC2 with Nginx

## 🛠️ Tech Stack

### Frontend
- **React** (19.2.4) - UI library
- **Axios** - HTTP client for API requests
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** (5.2.1) - Web framework
- **MongoDB Atlas** - Cloud database for file metadata
- **Mongoose** (9.1.6) - MongoDB ODM
- **Multer** (2.0.2) - File upload middleware
- **Multer-S3** - AWS S3 integration for file uploads
- **AWS SDK** - Amazon Web Services integration
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

### Cloud & Deployment
- **AWS S3** - File storage (scalable object storage)
- **AWS EC2** - Server hosting (t2.micro instance)
- **AWS IAM** - Access management
- **Nginx** - Web server and reverse proxy
- **PM2** - Process manager for Node.js

## 📋 Prerequisites

Before you begin, ensure you have the following:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account**
- **AWS Account** (for S3 and EC2)
- **Git**

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/file-sharing-system.git
cd file-sharing-system
```

### 2. Setup AWS S3 Bucket

1. Create an AWS account at [aws.amazon.com](https://aws.amazon.com)
2. Go to S3 service and create a bucket (e.g., `file-sharing-uploads`)
3. Configure bucket for public read access
4. Create IAM user with S3 full access
5. Save Access Key ID and Secret Access Key

### 3. Setup Backend (Server)
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=file-sharing

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket-name

# Server Configuration
BASE_URL=http://localhost:8000
PORT=8000
```

### 4. Setup Frontend (Client)
```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:
```env
# Leave empty for production, use full URL for local development
REACT_APP_API_URL=http://localhost:8000
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
│   ├── .env               # Client environment variables
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
│   │   ├── upload.js      # Local Multer configuration
│   │   └── s3-upload.js   # AWS S3 Multer configuration
│   ├── .env               # Server environment variables
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
  "path": "http://your-domain.com/file/<fileId>"
}
```

### Download File
```http
GET /file/:fileId

Response: Redirects to S3 file URL for download
```

## ☁️ AWS Deployment

This application is deployed on AWS using:
- **EC2 (t2.micro)** - Hosting the Node.js backend and React frontend
- **S3** - Storing uploaded files
- **MongoDB Atlas** - Database hosting
- **Nginx** - Web server and reverse proxy
- **PM2** - Process manager

### Deployment Steps:

1. **Launch EC2 Instance** (Ubuntu, t2.micro)
2. **Configure Security Groups** (Ports 22, 80, 8000)
3. **Create S3 Bucket** with public read access
4. **Setup IAM User** with S3 permissions
5. **Install Dependencies** (Node.js, Nginx, PM2)
6. **Clone Repository** on EC2
7. **Configure Environment Variables**
8. **Build React App** (`npm run build`)
9. **Start Backend** with PM2
10. **Configure Nginx** as reverse proxy

### Production Environment Variables:

**Server (.env):**
```env
MONGO_URI=your-mongodb-atlas-uri
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket-name
BASE_URL=http://your-ec2-ip
PORT=8000
```

**Client (.env):**
```env
# Empty for production (uses relative URLs via Nginx proxy)
REACT_APP_API_URL=
```

### Useful Commands on EC2:

```bash
# View backend logs
pm2 logs backend

# Restart backend
pm2 restart backend

# Check Nginx status
sudo systemctl status nginx

# Restart Nginx
sudo systemctl restart nginx

# Update application
cd ~/file-sharing-system
git pull
cd client && npm run build
sudo cp -r build/* /var/www/html/
cd ../server && pm2 restart backend
```

## 🎨 How It Works

1. **User selects a file** → Triggers hidden file input
2. **File auto-uploads** → React's `useEffect` detects file selection
3. **FormData created** → Contains file and filename
4. **POST request sent** → Axios sends to `/upload` endpoint via Nginx proxy
5. **Server processes** → Multer-S3 uploads directly to AWS S3 bucket
6. **Metadata saved** → File path (S3 URL) and name stored in MongoDB
7. **Link generated** → Unique download URL returned to frontend
8. **User shares link** → Recipients can download via unique URL
9. **Download tracked** → Counter increments on each download
10. **File served** → S3 redirects and serves the file

## 🔐 Environment Variables

### Server Environment Variables

Create a `.env` file in the `server` directory:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `AWS_ACCESS_KEY_ID` | AWS IAM access key | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret key | `wJalrXUtnFEMI/K7MDENG/...` |
| `AWS_REGION` | AWS region for S3 bucket | `us-east-1` |
| `AWS_BUCKET_NAME` | S3 bucket name | `file-sharing-uploads` |
| `BASE_URL` | Server base URL | `http://localhost:8000` or `http://your-ec2-ip` |
| `PORT` | Server port | `8000` |

### Client Environment Variables

Create a `.env` file in the `client` directory:

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API URL | `http://localhost:8000` (dev) or empty (prod) |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Upload Fails
- Verify AWS credentials in `.env` file
- Check S3 bucket permissions (public read access)
- Ensure IAM user has S3 full access
- Check PM2 logs: `pm2 logs backend`

### Can't Access Website
- Verify EC2 Security Group allows port 80
- Check if EC2 instance is running
- Verify Nginx status: `sudo systemctl status nginx`

### Download Link Doesn't Work
- Check S3 bucket policy allows public read
- Verify file exists in S3 Console
- Check MongoDB has correct file path

### CORS Errors
- Verify CORS is enabled in Express server
- Check Nginx proxy configuration
- Ensure API_URL is correct in client .env

## 📝 Future Enhancements

- [ ] Add file size limits (currently 50MB max)
- [ ] Implement file expiration dates
- [ ] Add password protection for files
- [ ] Support for multiple file uploads
- [ ] Add file type restrictions
- [ ] Implement user authentication
- [ ] Add file preview functionality
- [ ] Dark mode support
- [ ] Download limit per file
- [ ] QR code generation for share links
- [ ] Custom domain with SSL (HTTPS)
- [ ] CDN integration for faster downloads
- [ ] Email notifications for file uploads
- [ ] Admin dashboard for file management

## 💰 AWS Cost Breakdown

### Free Tier (First 12 Months):
- **EC2 t2.micro:** 750 hours/month (FREE)
- **S3 Storage:** 5GB (FREE)
- **S3 Requests:** 20,000 GET, 2,000 PUT (FREE)
- **MongoDB Atlas:** 512MB (FREE forever)

### After Free Tier:
- **EC2 t2.micro:** ~$8-10/month
- **S3 Storage:** $0.023/GB/month
- **Data Transfer:** First 1GB free, then $0.09/GB
- **Estimated Total:** $12-15/month for moderate usage

### Cost Optimization Tips:
- Use S3 lifecycle policies to delete old files
- Monitor usage with AWS CloudWatch
- Stop EC2 instance when not needed (development)
- Use CloudFront CDN for high traffic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Akash**
- GitHub: [@yourusername](https://github.com/yourusername)
- Live Demo: [http://34.228.79.163](http://34.228.79.163)

## 🙏 Acknowledgments

- Inspiration from various file-sharing services (WeTransfer, Dropbox)
- MERN stack community
- AWS documentation and tutorials
- MongoDB Atlas for free cloud database
- Icons and images from their respective sources
- Special thanks to the open-source community

## 📚 Key Learnings

This project demonstrates:
- ✅ Full-stack MERN development
- ✅ AWS cloud deployment (EC2, S3, IAM)
- ✅ File upload handling with Multer
- ✅ RESTful API design
- ✅ Linux server administration
- ✅ Nginx reverse proxy configuration
- ✅ Process management with PM2
- ✅ Environment-based configuration
- ✅ Cloud storage integration

## 🔗 Useful Resources

- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [Multer Documentation](https://github.com/expressjs/multer)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

⭐ **Star this repo if you find it helpful!**

💬 **Questions or suggestions? Open an issue!**
