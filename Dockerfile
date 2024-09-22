FROM node:22 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN NODE_OPTIONS="--max_old_space_size=1512" npm run build

FROM node:22

COPY --from=build /app/build ./build
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --omit dev

CMD ["node", "build"]
