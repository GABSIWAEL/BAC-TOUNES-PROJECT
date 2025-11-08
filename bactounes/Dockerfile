FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build -- --configuration production

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Install curl so the healthcheck in docker-compose works
RUN apk add --no-cache curl

# Clean default nginx content
RUN rm -rf ./*

# Copy Angular build
COPY --from=builder /app/dist/bactounes .

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
