FROM node:20-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV PORT=10000
EXPOSE 10000

CMD ["npm", "start"]
