
FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./package.json 
COPY ./package-lock.json ./package-lock.json

RUN npm install
COPY . . 
#this is not prod url
ENV DATABASE_URL="postgresql://postgres:mypassword123@localhost:5432/postgres"

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build --verbose
EXPOSE 3000
CMD [ "npm","start" ]
