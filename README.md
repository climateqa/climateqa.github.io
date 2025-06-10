# ClimateQ&A front website. 

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
The website is simply hosting the Hugging Face Space version as an embed in the front page. And the rest of the website is to document how ClimateQ&A works. 
https://huggingface.co/spaces/Ekimetrics/climate-question-answering 

### Installation

Properly install Node.js and Yarn
```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
