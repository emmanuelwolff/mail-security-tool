# building the app
In order to build the production files from react-create-app and populate then to public, use:

```bash
./build.sh
```

# where the code is
- The (dirty) server code is all inside `app/routes.php` file
- The react code is inside `client/src/` directory
- Database has been populated with 1000 rows of faked data

# to do
- **ERROR HANDLING** both server side and client side
- Remove unused files / features inherited from react-create-app and slim-skeleton frameworks
- fix the first load display error (a `0` is displayed before data appears)

# to improve
- (I prefer not talking about the design :-) )
- Use *react-virtualized* or such a library to handle rendering (that slow down after a big amount of data has been loaded through inifinte scrolling)
- Handle the memory after too much requests have been loaded
