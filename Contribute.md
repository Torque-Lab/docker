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
-- start postgres - --docker run -e POSTGRES_PASSWORD=mypassowrd123 -d -p 5432:5432 posgres

- Build the image- `docker build -t webapp .`
- Start the image - `docker run -p 3000:3000 webapp`

## Docker Compose installation steps

- install docker , docker -compose
  -Run `docker -compose up`
