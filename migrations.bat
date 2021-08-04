cd backend
CALL venv\Scripts\activate
CALL python manage.py makemigrations
CALL python manage.py migrate
deactivate