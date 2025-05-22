# India Population Visualization Dashboard

A full-stack web application built with **React** frontend and **Django** backend that visualizes India's population data on an interactive map using **Kepler.gl**. The application features user authentication, profile management, and an immersive data visualization experience.

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)
![Django](https://img.shields.io/badge/Django-3.2.5-green.svg)
![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)

## 🌟 Features

### 🔐 Authentication System
- **User Registration**: Complete registration form with validation
- **User Login**: Secure authentication with session management
- **Profile Management**: Edit and update user profile information
- **Protected Routes**: Dashboard and map access only for authenticated users

### 📊 Data Visualization
- **Interactive Map**: Powered by Kepler.gl for stunning data visualization
- **Population Data**: Comprehensive India population statistics
- **MapBox Integration**: High-quality map rendering and customization
- **Responsive Design**: Works seamlessly across different screen sizes

### 👤 User Dashboard
- **Profile Viewing**: Display user information in a clean interface
- **Profile Editing**: Update personal details with form validation
- **Navigation**: Easy access between map view and dashboard

## 🏗️ Tech Stack

### Backend
- **Django 3.2.5**: Web framework for Python
- **Django REST Framework**: API development
- **Django CORS Headers**: Cross-origin resource sharing
- **SQLite**: Default database (configurable)
- **Python 3.7+**: Programming language

### Frontend
- **React 17.0.2**: JavaScript library for building user interfaces
- **Redux**: State management with Redux Thunk middleware
- **React Router**: Client-side routing
- **Kepler.gl**: Advanced data visualization library
- **Axios**: HTTP client for API communication
- **Styled Components**: CSS-in-JS styling

### Development Tools
- **Batch Scripts**: Automated setup and execution
- **Git**: Version control
- **npm**: Package management
- **pip**: Python package management

## 📁 Project Structure

```
india_population_react_django/
├── backend/                      # Django backend application
│   ├── manage.py                 # Django management script
│   ├── requirements.txt          # Python dependencies
│   ├── db.sqlite3               # SQLite database
│   ├── user/                    # Django user app
│   │   ├── models.py            # User data models
│   │   ├── admin.py             # Django admin configuration
│   │   ├── api/                 # REST API endpoints
│   │   │   ├── views.py         # API view logic
│   │   │   ├── serializers.py   # Data serialization
│   │   │   └── urls.py          # API URL routing
│   │   └── migrations/          # Database migrations
│   └── user_dash/               # Django project settings
│       ├── settings.py          # Django configuration
│       ├── urls.py              # Main URL routing
│       └── wsgi.py              # WSGI configuration
├── frontend/                    # React frontend application
│   └── gui/                     # Main React app
│       ├── public/              # Static assets
│       ├── src/                 # Source code
│       │   ├── components/      # React components
│       │   │   ├── login.js     # Login component
│       │   │   ├── register.js  # Registration component
│       │   │   ├── dashboard.js # User dashboard
│       │   │   ├── map.js       # Kepler.gl map component
│       │   │   ├── error.js     # Error page
│       │   │   └── server.js    # API server configuration
│       │   ├── store/           # Redux store configuration
│       │   │   ├── actions/     # Redux actions
│       │   │   └── reducers/    # Redux reducers
│       │   ├── assets/          # Data and configuration files
│       │   │   ├── population.json  # India population data
│       │   │   ├── config.json      # Kepler.gl configuration
│       │   │   └── kepler.gl.json   # Additional map settings
│       │   └── App.js           # Main App component
│       ├── package.json         # Node.js dependencies
│       └── .env                 # Environment variables
├── createVirtualEnv.bat         # Setup script for Python environment
├── executeDjango.bat            # Django server startup script
├── executeReact.bat             # React development server script
├── installReactPackages.bat     # React dependencies installation
├── migrations.bat               # Database migration script
└── LICENSE                      # MIT License
```

## 🚀 Installation & Setup

### Prerequisites
- **Python 3.7+** installed on your system
- **Node.js 14+** and npm installed
- **Git** for version control
- **MapBox API Token** (free tier available)

### Quick Start (Windows)

The project includes convenient batch scripts for easy setup:

#### 1. Backend Setup
```bash
# Create virtual environment and install dependencies
createVirtualEnv.bat

# Setup database migrations
migrations.bat

# Start Django server (runs on http://127.0.0.1:8000)
executeDjango.bat
```

#### 2. Frontend Setup
```bash
# Install React dependencies
installReactPackages.bat

# Configure MapBox API (see Configuration section below)
# Edit frontend/gui/.env file

# Start React development server (runs on http://localhost:3000)
executeReact.bat
```

### Manual Setup

#### Backend Setup
```bash
# Create and activate virtual environment
pip install virtualenv
virtualenv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Install Python dependencies
cd backend
pip install -r requirements.txt

# Setup database
python manage.py makemigrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Run Django server
python manage.py runserver
```

#### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend/gui

# Install Node.js dependencies
npm install

# Start development server
npm start
```

## ⚙️ Configuration

### 1. MapBox API Token
1. Sign up for a free account at [MapBox](https://www.mapbox.com/)
2. Get your API access token
3. Update `frontend/gui/.env`:
```env
REACT_APP_MAPBOX_API = "your_mapbox_api_token_here"
```

### 2. Django Settings
Update `backend/user_dash/settings.py`:

```python
# Add your domain to allowed hosts for production
ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'your-domain.com']

# Update CORS settings for production
CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://your-domain.com"
]

# Configure database for production (optional)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',  # or mysql
        'NAME': 'your_database_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### 3. API Server Configuration
Update `frontend/gui/src/components/server.js` for production:
```javascript
const server = 'https://your-api-domain.com/'  // Production
// const server = 'http://127.0.0.1:8000/'     // Development
export default server
```

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/` - User registration
- `GET /api/{id}/` - Get user details
- `PUT /api/{id}/` - Update user profile
- `DELETE /api/{id}/` - Delete user account

### User Model Fields
```python
{
    "id": "integer",
    "name": "string (max 30 chars)",
    "uname": "string (max 30 chars)",
    "email": "email (max 30 chars)",
    "pwd": "string (max 15 chars)",
    "dob": "date (YYYY-MM-DD)",
    "phone": "integer",
    "add1": "string (max 50 chars)",
    "add2": "string (optional, max 50 chars)",
    "city": "string (max 20 chars)",
    "state": "string (max 50 chars)",
    "country": "string (max 50 chars)",
    "created_at": "datetime",
    "updated_at": "datetime"
}
```

## 🎯 Usage

### User Registration
1. Navigate to `/register`
2. Fill out the registration form with:
   - Personal information (name, username, email)
   - Password and confirmation
   - Date of birth and phone number
   - Address details (city, state, country)
3. Submit the form to create your account

### User Login
1. Navigate to `/login`
2. Enter your username and password
3. Access the interactive map and dashboard

### Viewing Population Data
1. After login, you'll see the interactive India population map
2. Use Kepler.gl controls to:
   - Zoom and pan around the map
   - Filter data by different parameters
   - Change visualization styles
   - Export data or images

### Managing Profile
1. Click "Profile" in the navigation bar
2. View your current information
3. Click "Edit" to modify your details
4. Submit changes to update your profile

## 🚀 Deployment

### Heroku Deployment (Example)

#### Backend (Django)
```bash
# Install Heroku CLI and login
heroku login

# Create Heroku app
heroku create your-app-name-backend

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set DEBUG=False
heroku config:set SECRET_KEY="your-secret-key"

# Deploy
git push heroku main

# Run migrations
heroku run python manage.py migrate
```

#### Frontend (React)
```bash
# Build production version
npm run build

# Deploy to Netlify, Vercel, or Heroku
# Update API endpoints in server.js
```

### Production Considerations
- Set `DEBUG = False` in Django settings
- Use environment variables for sensitive data
- Configure proper CORS settings
- Set up SSL certificates
- Use a production database (PostgreSQL, MySQL)
- Implement proper logging and monitoring

## 🧪 Testing

### Backend Testing
```bash
cd backend
python manage.py test
```

### Frontend Testing
```bash
cd frontend/gui
npm test
```

## 🔧 Development

### Adding New Features
1. **Backend**: Create new views in `user/api/views.py`
2. **Frontend**: Add components in `src/components/`
3. **State Management**: Update Redux actions and reducers
4. **Routing**: Add new routes in `App.js`

### Code Style
- **Python**: Follow PEP 8 standards
- **JavaScript**: Use ES6+ features and functional components
- **React**: Use hooks for state management
- **CSS**: Use styled-components for component styling

## 🐛 Troubleshooting

### Common Issues

#### CORS Errors
- Ensure `django-cors-headers` is installed
- Check `CORS_ORIGIN_WHITELIST` in Django settings
- Verify frontend URL is correctly added

#### MapBox Map Not Loading
- Verify MapBox API token in `.env` file
- Check browser console for API errors
- Ensure token has proper permissions

#### Database Migration Errors
```bash
# Reset migrations (development only)
python manage.py migrate --fake-initial
python manage.py migrate
```

#### Node Module Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Contact the author

## 🔄 Version History

- **v1.0.0** - Initial release with user authentication and map visualization
- **v1.1.0** - Added profile management features
- **v1.2.0** - Enhanced UI/UX and error handling

---

⭐ **Star this repository if you found it helpful!**
