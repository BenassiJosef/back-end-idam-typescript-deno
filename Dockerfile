FROM hayd/alpine-deno:latest

EXPOSE 8000

WORKDIR /app

ADD . /app

RUN deno --unstable cache main.ts

CMD ["run","--unstable", "--allow-net", "--allow-write", "--allow-read","--allow-env", "main.ts"]
