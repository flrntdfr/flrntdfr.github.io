# Makefile - Jekyll static website
# Florent Dufour
# 2019 - 2020

JEKYLL = bundle exec jekyll

build:
	$(JEKYLL) build
serve:
	open -a safari http://127.0.0.1:4000/ && $(JEKYLL) serve
clean:
	$(JEKYLL) clean
update:
	gem update
