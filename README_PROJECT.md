# School ERP System - Frontend UI

A complete School ERP (Enterprise Resource Planning) system UI built with React, TailwindCSS, and Shadcn UI components. This is a frontend-only implementation with hardcoded data for demonstration purposes.

## Features

### 1. Dashboard
- Overview statistics cards (Total Students, Teachers, Attendance %, Fees Collected)
- Monthly attendance trend chart
- Class-wise statistics bar chart
- Recent announcements section with badges

### 2. Students Management
- Complete student list with search and filter functionality
- Student table with pagination-ready structure
- Individual student profile pages with tabs:
  - Personal Information
  - Attendance Records
  - Fee Payment History
  - Exam Results
- Modal for adding new students (UI only)

### 3. Teachers Management
- Teacher directory with cards layout
- Filter by subject
- Detailed teacher information including:
  - Qualifications
  - Experience
  - Contact details
  - Classes teaching

### 4. Attendance Tracking
- Daily attendance overview
- Class-wise attendance statistics
- Date and class selector
- Visual attendance percentage indicators
- Status badges (Present/Absent)

### 5. Fees Management
- Fee structure by class
- Payment status tracking
- Collection statistics
- Payment history with receipts
- Status indicators (Paid/Partial)

### 6. Examinations
- Exam schedule with timetable
- Results display with rankings
- Subject-wise marks breakdown
- Performance statistics
- Grade and percentage calculations

### 7. Timetable
- Weekly class schedule grid
- Period-wise breakdown
- Teacher and room assignments
- Responsive design (desktop grid, mobile cards)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Chart library
- **Lucide React** - Icon library
- **Shadcn UI patterns** - Reusable UI components

## Project Structure

```
school-erp/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.jsx    # Main app layout
│   │   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   │   └── Navbar.jsx        # Top navigation bar
│   │   └── ui/
│   │       ├── Card.jsx          # Card components
│   │       ├── Table.jsx         # Table components
│   │       ├── Button.jsx        # Button component
│   │       ├── Badge.jsx         # Badge component
│   │       ├── Input.jsx         # Input component
│   │       ├── Modal.jsx         # Modal component
│   │       ├── Tabs.jsx          # Tabs component
│   │       └── Chart.jsx         # Chart components
│   ├── pages/
│   │   ├── Dashboard.jsx         # Dashboard page
│   │   ├── Students.jsx          # Students list page
│   │   ├── StudentProfile.jsx    # Individual student page
│   │   ├── Teachers.jsx          # Teachers page
│   │   ├── Attendance.jsx        # Attendance page
│   │   ├── Fees.jsx              # Fees management page
│   │   ├── Exams.jsx             # Examinations page
│   │   └── Timetable.jsx         # Timetable page
│   ├── data/
│   │   ├── studentsData.js       # Student records
│   │   ├── teachersData.js       # Teacher records
│   │   ├── attendanceData.js     # Attendance records
│   │   ├── feesData.js           # Fee records
│   │   ├── examsData.js          # Exam records
│   │   ├── timetableData.js      # Timetable data
│   │   └── dashboardData.js      # Dashboard stats
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   ├── App.jsx                   # Main app component with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── vite.config.js                # Vite configuration
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Navigate to the project directory:
   ```bash
   cd school-erp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Responsive Design
- Fully responsive layout that works on mobile, tablet, and desktop
- Mobile-friendly sidebar with overlay
- Adaptive tables and cards
- Touch-friendly interactions

### UI Components
All components are built following Shadcn UI patterns and are fully reusable:

- **Card** - Container component with header, content, and footer
- **Table** - Responsive table with header, body, and cell components
- **Button** - Multiple variants (default, secondary, outline, ghost, danger, success)
- **Badge** - Status indicators with color variants
- **Input** - Styled form input
- **Modal** - Overlay dialog component
- **Tabs** - Tabbed interface component
- **Charts** - Line and bar charts using Recharts

### Data Structure
All data is hardcoded in JSON format in the `src/data/` directory. This makes it easy to replace with API calls later:

```javascript
// Example: Replace hardcoded data with API call
import { studentsData } from '../data/studentsData';

// Later, replace with:
const [students, setStudents] = useState([]);
useEffect(() => {
  fetch('/api/students')
    .then(res => res.json())
    .then(data => setStudents(data));
}, []);
```

## Customization

### Colors
Modify `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Add New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Sidebar.jsx`

### Modify Data
Update the JSON data in `src/data/` files to change the displayed information.

## Future Enhancements

To convert this to a full-stack application:

1. **Backend Integration**
   - Replace hardcoded data with API calls
   - Add authentication and authorization
   - Implement CRUD operations

2. **State Management**
   - Add Redux or Context API for global state
   - Implement data caching

3. **Additional Features**
   - Real-time notifications
   - File upload functionality
   - Print/PDF export
   - Email integration
   - Role-based access control

4. **Performance**
   - Add pagination for large datasets
   - Implement virtual scrolling
   - Optimize images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational/demonstration purposes.

## Contributing

This is a demo project. Feel free to fork and modify as needed.
