1. Install dependencies

FROM node:20-slim AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

2. Build the website

FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

3. Final "Runner" - This is where the fix is

FROM node:20-slim AS runner
WORKDIR /app

Set production environment

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

Copy the necessary files from the builder

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

Start the application

EXPOSE 8080
CMD ["node", "server.js"]
