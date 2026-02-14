@echo off
echo Starting CarTrust Application...
echo.
echo Opening browser at http://localhost:8080
echo Press Ctrl+C to stop the server
echo.

REM Check if Python 3 is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting Python HTTP Server on port 8080...
    start http://localhost:8080
    python -m http.server 8080
) else (
    echo Python not found. Trying alternative methods...
    echo.
    echo Please use one of these methods:
    echo 1. Install Python from https://www.python.org/
    echo 2. Or open index.html directly in your browser
    echo 3. Or use VS Code Live Server extension
    echo.
    pause
)
