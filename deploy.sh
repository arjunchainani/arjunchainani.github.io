npm run build
git add dist -f
git commit -m "deployed"
git subtree push --prefix dist origin gh-pages

