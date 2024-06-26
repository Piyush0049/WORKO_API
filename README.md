This submission presents the Worko.io API, designed to manage user data with capabilities to retrieve all users' details, access specific user information by ID, update existing records, delete entries, and create new user profiles, made by Piyush Joshi.
The GET requests can easily be viewed in browser, but for POST, DELETE, and PUT requests you can use either POSTMAN or THUNDERCLIENT.


1. Retrieve All Users

     GET https://worko-api-1.onrender.com/worko/
     Description: Retrieves details of all users.
     Usage: Access all user information.
   

3. Create a User

     POST https://worko-api-1.onrender.com/worko/
     Description: Creates a new user profile.
     Request Body Example:

     {
       "email": "skill@gmail.com",
       "name": "skill",
       "age": 22,
       "city": "Rohtak",
       "zipCode": "125005"
     }
   

5. Retrieve User by ID

     GET https://worko-api-1.onrender.com/worko/:userId
     Description: Retrieves details of a specific user by their ID.
     Parameters:
     userId: Unique identifier of the user in the database.


6. Update User

     PUT https://worko-api-1.onrender.com/worko/:userId
     Description: Updates details of a specific user by their ID.
     Parameters:
     userId: Unique identifier of the user in the database.
     Request Body Example:

     {
       "email": "skill@gmail.com"
     }


7. Delete User

     DELETE https://worko-api-1.onrender.com/worko/:userId
     Description: Deletes a specific user by their ID.
     Parameters:
     userId: Unique identifier of the user in the database.


