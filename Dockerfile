FROM node:10.1.0
WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN CI=true npm test
RUN CI=true npm run build

FROM nginx
COPY --from=0 /build/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed "s~ACTIVE_CONFIG~$ACTIVE_CONFIG~g;s~EXTRA_CONFIG~$EXTRA_CONFIG~g" /usr/share/nginx/html/config.template.json > /usr/share/nginx/html/config.json && nginx -g "daemon off;"
