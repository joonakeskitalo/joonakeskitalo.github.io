# Joona's blog and personal page

Uses [Github Pages](https://pages.github.com/) & thus [Jekyll](https://jekyllrb.com/). View at [https://joonakeskitalo.github.io/](https://joonakeskitalo.github.io/)

## Development

Check [Jekyll instructions](https://jekyllrb.com/docs/installation/macos/) for macOS

- `brew install chruby ruby-install xz`
- `ruby-install ruby 3.1.3`

```
echo "source /opt/homebrew/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source /opt/homebrew/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.3" >> ~/.zshrc # run 'chruby' to see actual version
```

- `ruby -v` should output 3.1.3
- `gem install jekyll`

**Running**

- Install dependencies: `gem install bundler jekyll github-pages`
- Run: `bundle exec jekyll serve`
- Build: `bundle exec jekyll build`

### Deployment

Push changes to GitHub and GitHub Pages will build & release the latest version.