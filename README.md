# shout-website
like yellkey.com but serverless

# API
+ See: https://github.com/jrcichra/shout-api for more details on the API

# Use It
+ https://shout.jrcichra.dev

# Deploy it
+ Clone the repository and use Cloudflare Pages. Deploy the API on Cloudflare Workers. Glue them together on the same subdomain and make sure you have a custom route defined for the API. Mine is defined at https://shout.jrcichra.dev/api. You can do this in your `wrangler.toml` file.

# TODO
+ Move API to page functions: https://developers.cloudflare.com/pages/platform/functions
+ Remove `/w/` in path
+ Make enter key submit form