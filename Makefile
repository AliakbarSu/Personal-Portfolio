.PHONY: help install dev dev-portfolio dev-blog

help:
	@echo "make install        Install dependencies"
	@echo "make dev            Run portfolio (http://localhost:3004) and blog (http://127.0.0.1:3001)"
	@echo "make dev-portfolio  Run portfolio only (http://localhost:3004)"
	@echo "make dev-blog       Run blog only (http://127.0.0.1:3001)"

install:
	pnpm install

# Reinstall only when the lockfile or manifests change
node_modules/.modules.yaml: pnpm-lock.yaml package.json apps/*/package.json packages/*/package.json
	pnpm install
	@touch $@

dev: node_modules/.modules.yaml
	pnpm dev

dev-portfolio: node_modules/.modules.yaml
	pnpm --filter portfolio dev

dev-blog: node_modules/.modules.yaml
	pnpm --filter blog dev
