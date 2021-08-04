CALL pip install virtualenv
CALL virtualenv venv
CALL venv\Scripts\activate
CALL cd backend
CALL pip install -r requirements.txt
deactivate