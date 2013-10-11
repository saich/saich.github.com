## Setup

- Install Ruby 1.9.3 or greater.
- Install dependencies.

```
	gem install bundler
	bundle install
```

**Reference:** [http://octopress.org/docs/setup/](http://octopress.org/docs/setup/)

## Usage
New Post: `rake new_post["title"]`

New Page: `rake new_page[super-awesome]`

`rake generate`

`rake preview`

To deploy:
	
	rake generate
	rake deploy

**Reference:** [http://octopress.org/docs/blogging/](http://octopress.org/docs/blogging/)
