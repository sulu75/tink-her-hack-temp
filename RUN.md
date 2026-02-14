# How to Run CarTrust Application

## Method 1: Simple - Open Directly in Browser (Quickest)

1. Navigate to the project folder: `c:\Users\ACER\Desktop\ar`
2. Double-click `index.html` or right-click → "Open with" → Choose your browser (Chrome, Firefox, Edge, etc.)

**Note:** Some features may be limited when opening directly (file:// protocol)

---

## Method 2: Using Python HTTP Server (Recommended)

### If you have Python installed:

1. Open PowerShell or Command Prompt
2. Navigate to the project folder:
   ```powershell
   cd c:\Users\ACER\Desktop\ar
   ```

3. Run one of these commands:

   **Python 3:**
   ```powershell
   python -m http.server 8080
   ```

   **Python 2:**
   ```powershell
   python -m SimpleHTTPServer 8080
   ```

4. Open your browser and go to: `http://localhost:8080`

5. Press `Ctrl+C` to stop the server when done

---

## Method 3: Using Node.js http-server

### If you have Node.js installed:

1. Install http-server globally (one-time):
   ```powershell
   npm install -g http-server
   ```

2. Navigate to project folder:
   ```powershell
   cd c:\Users\ACER\Desktop\ar
   ```

3. Start the server:
   ```powershell
   http-server -p 8080
   ```

4. Open browser: `http://localhost:8080`

---

## Method 4: Using VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser will open automatically

---

## Method 5: Using VS Code Debugger (Already Configured)

1. Open VS Code in the project folder
2. Press `F5` or go to Run → Start Debugging
3. Make sure you have a server running on port 8080 first (use Method 2 or 3)

---

## Quick Start Script

I've created a `start.bat` file that you can double-click to automatically start a Python server!

---

## Troubleshooting

- **Port 8080 already in use?** Change the port number in the command (e.g., `8081`, `3000`)
- **Charts not showing?** Make sure you're using a web server (Method 2-4), not opening file directly
- **Login not working?** Enter any username and password (demo mode)
