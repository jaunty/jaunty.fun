# jaunty.fun

A static website for Jaunty made to host world downloads, screenshots and direct users to the Discord.

# Running

This site was made using [Caddy's](https://caddyserver.com) templating engine, therefore it needs to be ran using Caddy. The site also expects Caddy to be ran with `$DISCORD_SLUG` set to the code of your Discord server invite, otherwise the `/play` route will rewrite to `/closed.html`.

For reference, below is a production-ready Caddyfile.

```caddyfile
jaunty.fun, www.jaunty.fun {
    root .
    try_files {path}.html {path}
    templates
    encode gzip zstd

    file_server {
        index index.html
    }

    @slug `"{$DISCORD_SLUG}" != ""`
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
