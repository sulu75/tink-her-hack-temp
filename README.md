# CarTrust – Used Car Intelligence Platform

**Team:** Codepink

**Team members:**
- Sulekha M – Christ College of Engineering
- Raina Shaju – Christ College of Engineering

A web app that helps buyers evaluate used cars with risk scores, cost projections, and market comparisons. Includes user accounts, car analysis, and a mechanic/car-expert directory.

---

## Features

- **User authentication** – Login and sign up (demo mode, data in browser)
- **Mechanic / car expert registration** – Experts can register contact details from the sign-up page; their info appears in analysis reports
- **Car analysis** – Enter model, year, mileage, fuel type, price, and optional issues; get:
  - Risk score (Low / Medium / High)
  - Estimated annual maintenance cost
  - 5-year ownership cost
  - Market price and price comparison (Good Deal / Fair / Overpriced)
  - Common issues for the vehicle
  - 5-year cost projection chart
- **Report section** – Analysis results plus a **Recommended Car Expert / Mechanic** block with name, phone, and email (from registered experts)
- **Dark theme** – Consistent dark UI across login, About, Features, and Dashboard
- **About & Features** – Info and feature list with dark layout

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (no frameworks)
- **Charts:** [Chart.js](https://www.chartjs.org/) (CDN)
- **Data:** `localStorage` for users and mechanic registrations (no backend)
- **Fonts:** Google Fonts (Bungee)

---

## Project Structure

```
ar/
├── index.html       # Single-page app (sections: About, Features, Login, Dashboard)
├── app.js           # Auth, car analysis logic, mechanic registration, results
├── styles.css       # Dark theme and layout
├── assets/
│   └── logo.png     # CarTrust logo
├── RUN.md           # Detailed run instructions
├── flowchart.md     # System flowchart
├── start.bat        # Optional: start local server (Windows)
└── README.md
```

---

## How to Run

1. **Quick:** Open `index.html` in a browser (double-click or drag into the window).
2. **Recommended:** Serve the folder over HTTP so everything works reliably:
   - **Python:** `python -m http.server 8080` then go to `http://localhost:8080`
   - **Node:** `npx serve` or `npx http-server` then open the URL shown

See **RUN.md** for more options (e.g. VS Code Live Server, `start.bat`).

---

## Usage

1. **Home (login)** – Sign up or log in (any username/password in demo). Use “Register as mechanic / car expert” to add expert contact details.
2. **About / Features** – Use the nav to read about the platform and features.
3. **Dashboard** – After login, enter car details and click **Analyze Car**.
4. **Report** – View risk score, metrics, issues, chart, and the **Recommended Car Expert / Mechanic** contact (if any experts have registered).

---

## License

Use and modify as needed for your project.
