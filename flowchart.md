# CarTrust – Used Car Intelligence Platform
## System Flowchart

```mermaid
flowchart TD
    Start([Start]) --> OpenWebsite[User Opens Website]
    OpenWebsite --> Login{User Login}
    Login -->|Not Logged In| LoginForm[Display Login Form]
    LoginForm --> ValidateLogin{Validate Credentials}
    ValidateLogin -->|Invalid| LoginError[Display Error Message]
    LoginError --> LoginForm
    ValidateLogin -->|Valid| LoginSuccess[Login Successful]
    Login -->|Already Logged In| LoginSuccess
    LoginSuccess --> Dashboard[Display Dashboard]
    
    Dashboard --> InputForm[User Enters Car Details]
    InputForm --> EnterModel[Car Model]
    EnterModel --> EnterYear[Manufacturing Year]
    EnterYear --> EnterMileage[Mileage]
    EnterMileage --> EnterFuel[Fuel Type]
    EnterFuel --> EnterPrice[Price of Car]
    EnterPrice --> ValidateInput{System Validates Input}
    
    ValidateInput -->|Validation Error| DisplayError[Display Validation Error]
    DisplayError --> InputForm
    
    ValidateInput -->|Valid Input| FetchData[Fetch Car Data]
    
    FetchData --> InternalDB[(Internal Database)]
    InternalDB --> DBData[Market Price<br/>Avg Maintenance<br/>Common Issues<br/>Failure Rate]
    
    FetchData --> ExternalAPI{Use External API?}
    ExternalAPI -->|Yes| CallAPI[Call External API<br/>Vehicle Specs/Valuation]
    CallAPI --> APIData[API Response Data]
    ExternalAPI -->|No| SkipAPI[Skip External API]
    
    DBData --> MergeData[Merge Data Sources]
    APIData --> MergeData
    SkipAPI --> MergeData
    
    MergeData --> CalculateRisk[Calculate Risk Score<br/>Based on Age, Mileage, Failure Rate]
    CalculateRisk --> CalculateMaintenance[Calculate Estimated<br/>Annual Maintenance Cost]
    CalculateMaintenance --> CalculateOwnership[Calculate 5-Year<br/>Ownership Cost Projection]
    
    CalculateOwnership --> GenerateOutput[Generate Output Report]
    
    GenerateOutput --> Output1[Estimated Future<br/>Maintenance Cost]
    GenerateOutput --> Output2[Common Issues List]
    GenerateOutput --> Output3[Risk Score<br/>Low/Medium/High]
    GenerateOutput --> Output4[Total Ownership Cost]
    GenerateOutput --> Output5[Price Comparison<br/>Good Deal Analysis]
    
    Output1 --> DisplayResults[Display Results on Dashboard]
    Output2 --> DisplayResults
    Output3 --> DisplayResults
    Output4 --> DisplayResults
    Output5 --> DisplayResults
    
    DisplayResults --> UserAction{User Action}
    UserAction -->|Save Report| SaveReport[Save Report to Database]
    UserAction -->|Download PDF| GeneratePDF[Generate PDF Report]
    UserAction -->|New Analysis| InputForm
    UserAction -->|Logout| Logout[Logout User]
    
    SaveReport --> SuccessMsg[Report Saved Successfully]
    GeneratePDF --> PDFReady[PDF Generated]
    PDFReady --> DownloadPDF[Download PDF File]
    
    SuccessMsg --> Dashboard
    DownloadPDF --> Dashboard
    Logout --> End([End])
    
    style Start fill:#90EE90
    style End fill:#FFB6C1
    style InternalDB fill:#87CEEB
    style CallAPI fill:#FFD700
    style ValidateInput fill:#FFA500
    style UserAction fill:#DDA0DD
    style DisplayResults fill:#98FB98
```

## Flowchart Legend

- **Start/End** (Oval): Process start and end points
- **Process Blocks** (Rectangle): Actions and operations
- **Decision Blocks** (Diamond): Conditional logic and validation
- **Database** (Cylinder): Data storage operations
- **API Block** (Hexagon): External API interactions
- **Arrows**: Data flow direction

## System Components

### 1. Authentication Flow
- User login validation
- Session management
- Error handling for invalid credentials

### 2. Data Input & Validation
- Car Model (text input)
- Manufacturing Year (numeric, range validation)
- Mileage (numeric, positive validation)
- Fuel Type (dropdown: Petrol/Diesel/Electric/Hybrid)
- Price (numeric, positive validation)

### 3. Data Fetching
- **Internal Database**: Stores historical data, market prices, maintenance records, common issues, failure rates
- **External API** (Optional): Vehicle specifications, current market valuation, additional reliability data

### 4. Calculations
- **Risk Score Algorithm**: 
  - Age factor (older = higher risk)
  - Mileage factor (higher = higher risk)
  - Failure rate from database
  - Output: Low (0-40), Medium (41-70), High (71-100)
  
- **Annual Maintenance Cost**:
  - Base maintenance cost from database
  - Adjusted for age and mileage
  - Fuel type multiplier
  
- **5-Year Ownership Cost**:
  - Purchase price
  - 5 × Annual maintenance
  - Estimated repairs (based on failure rate)
  - Depreciation factor

### 5. Price Comparison
- Compare entered price with market price from database
- Calculate value score
- Determine if it's a "Good Deal", "Fair Price", or "Overpriced"

### 6. Output Generation
- Visual dashboard with charts and metrics
- Detailed report with all calculations
- PDF export functionality
- Save report for future reference
