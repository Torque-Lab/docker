## Manual installation

- install nodejs
  -clone repo
  -npm install
  -start database
  --docker run -e POSTGRES_PASSWORD=mypassowrd123 -d -p 5432:5432 posgres
  -- add database url in .env
- npx prisma migrate
  -npx prisma genrate
- npm run build
  npm run start

## Docker installation

-- Install Docker
--create a network - docker network create dbnetwork
-- start postgres - --docker run --network dbnetwork --name postgres -e POSTGRES_PASSWORD=mypassword123 -d -p 5432:5432 postgres

- Build the image- `docker build --network=host -t webapp .`
-note:her during build time sever connect to  db at system localhost so we during building connect on network of host, but aftr build, in start phase , we have to connect, both container of server and db with docker network  because after build server also be in cotainer and db be in seprate conatiner, so we connect them with docker network , because server inside cotainer not be able connect with system localhost
- Start the image - `docker run -e DATABASE_URL="postgresql://postgres:mypassword123@postgres:5432/postgres" --network dbnetwork -d -p 3000:3000 webapp`

## Docker Compose installation steps

- install docker , docker -compose
  -Run `docker -compose up`
