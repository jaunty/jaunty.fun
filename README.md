# jaunty.fun

A static website for Jaunty made to host world downloads, screenshots, and direct users to the Discord.

# Running

This site was made using [Caddy's](https://caddyserver.com) templating engine, therefore it needs to be ran using Caddy. The site expects the following to be present.

1. Caddy needs to be ran with the `$DISCORD_SLUG` variable set to the code of your Discord server's invite.
2. The `/downloads` folder must be present and have files within it otherwise that route will 404.

For reference, below is a production-ready Caddyfile.

```caddyfile
jaunty.fun, www.jaunty.fun {
    root .

    file_server {
        index index.html
    }

    try_files {path}.html {path}

    templates

    encode gzip zstd

    file_server /downloads/* browse

    @slug `"{DISCORD_SLUG}" != ""`
    handle /play {
        redir @slug https://discord.gg/{$DISCORD_SLUG}
        rewrite /closed.html
    }

    handle /screenshots/* {
        rewrite * /screenshot_gallery.html
    }

    handle_errors {
        rewrite * /error.html
        templates
        file_server
    }
}
```

# License

[LICENSE](LICENSE)
