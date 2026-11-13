@echo off
curl -sS -X POST "https://ship.embarko.ai/apps" -H "X-App-Name: elitestudio" -H "X-Agent-Name: antigravity" -F "source=@app.tar.gz" > deploy_out.txt 2>&1

