DIST_DIR = dist/

.PHONY: help
help: ## Show this help message
	@echo 'usage: make [target] ...'
	@echo
	@echo 'targets:'
	@echo
	@echo "$$(grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' -e 's/^\(.\+\):\(.*\)/\\x1b[36m\1\\x1b[m:\2/' | column -c2 -t -s : | sed -e 's/^/  /')"

.PHONY: clean
clean: ## Remove the distribution directory artefacts
	@echo 'cleaning dist folder'
	@rm -r ${DIST_DIR}*