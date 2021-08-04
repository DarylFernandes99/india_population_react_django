# India Population built using React and Django
This website is built using React, Django. It consists of a login, register screen that allows a user to create a profile, once profile is created the user can login and view the population data on an India map. KeplerGL is integrated to display the data on a map.

<h3>Instructions for execution(For windows) [all *.bat files are found in the root directory]</h3>
<ul>
  <li>Run the "createVirtualEnv.bat" file to create a python virtual environment and install requirements</li>
  <li>Django Setup (Backend)</li>
    <ol>
      <li>Modify the settings.py file under "backend/user_dash/"</li>
      <li>Add react website url to CORS_ORIGIN_WHITELIST</li>
      <li>Run "migrations.bat" to create migrations</li>
      <li>Run "executeDjango.bat" to run server</li>
    </ol>
  <li>React Setup (Frontend)</li>
    <ol>
      <li>Modify "server.js" under "frontend/gui/src/components/"</li>
      <li>Run "installReactPackages.bat" to install the dependencies</li>
      <li>Run "executeReact.bat" to run react</li>
    </ol>
</ul>
