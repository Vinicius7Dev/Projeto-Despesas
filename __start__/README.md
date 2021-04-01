# Creating the Application Database

**Docker Option:**
    - docker run --name despesas_db -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -t postgres
    - Create a data base named "despesas_db"

**With PostgresSGBD:**
    - Create a data base named "despesas_db"
    - Password: postgres
    - Run on port: 5432