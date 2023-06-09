# Augmented Reality Demos

Hosting AR experiences using AR.js and A-Frame.

## Structure

Each page has a folder and has an index.html inside of its folder. The pages folder contains all of the page folders. We use Vite to build the site and host a local server, and we use GitHub Actions to automatically deploy the site to GitHub pages. AFrame and AR.js are used to make the AR content in the website.

## Development

### Prerequisites

- Make sure you have NodeJS installed.
- Clone this repository
- Run

  ```bash
  npm i
  ```

### Hosting a local server

Run

```bash
npm run start
```

You can also specify the page to host on the local server using the open flag (ie. `--open [page_to_host]`)

```bash
npm run start -- --open geolocation
```

> **NOTE:**
>
> The first `--` is to separate flags for npm from flags we
> want to pass into the start script.

### Hosting a local server live

If you need to test the website from different devices, it's best to host the server live through a proxy. This repo has scripts to host from localtunnel or from ngrok.

#### Using localtunnel

Run

```bash
npm run start:live
```

> **NOTE:**
>
> Localtunnel has recently put an ip password check when connecting to the tunnel.
> If you're unable to get past this check, then consider using ngrok to host the
> local serve online.

#### Using ngrok

Make sure you have [ngrok](https://ngrok.com/product) installed and have registered an ngrok account and setup your ngrok token.

Run

```bash
npm run start
```

In a separate terminal, run

```bash
npm run ngrok
```

> **NOTE:**
>
> We have a separate command for ngrok because it doesn't display any output when its
> used with the "concurrently" npm command.

### Building the website

Run

```bash
npm run build
```
