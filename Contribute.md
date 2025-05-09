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
-note her duying build time sever connect db at system localhost but aftr build in start phase , we have connect both container of server and db with network  because after buiild server also be in cotainer that will be will to connect system local host so url of db changes with postgres asusal 
- Start the image - `docker run -e DATABASE_URL="postgresql://postgres:mypassword123@postgres:5432/postgres" --network dbnetwork -d -p 3000:3000 webapp`

## Docker Compose installation steps

- install docker , docker -compose
  -Run `docker -compose up`
