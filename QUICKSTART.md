# School ERP - Quick Start Guide

## 🚀 Getting Started

The development server is already running at: **http://localhost:5173**

## 📁 Project Overview

This is a complete School ERP UI built with:
- ⚛️ React 18
- 🎨 TailwindCSS
- 🧩 Shadcn UI patterns
- 📊 Recharts
- 🛣️ React Router

## 🎯 Features Implemented

### ✅ Pages Created:
1. **Dashboard** (`/`) - Stats cards, charts, and announcements
2. **Students** (`/students`) - Student list with search/filter
3. **Student Profile** (`/students/:id`) - Individual student details with tabs
4. **Teachers** (`/teachers`) - Teacher directory
5. **Attendance** (`/attendance`) - Daily attendance tracking
6. **Fees** (`/fees`) - Fee structure and payment status
7. **Exams** (`/exams`) - Exam schedules and results
8. **Timetable** (`/timetable`) - Weekly class schedule

### ✅ Components Built:
- 🎴 Card (with Header, Content, Footer)
- 📋 Table (responsive)
- 🏷️ Badge (multiple variants)
- 🔘 Button (6 variants)
- 📝 Input
- 🪟 Modal
- 📑 Tabs
- 📈 Charts (Line & Bar)
- 🧭 Sidebar Navigation
- 🔝 Top Navbar

### ✅ Data Files:
All hardcoded data is in `src/data/`:
- `studentsData.js` - 10 sample students
- `teachersData.js` - 8 sample teachers
- `attendanceData.js` - Attendance records
- `feesData.js` - Fee structure and payments
- `examsData.js` - Exam schedules and results
- `timetableData.js` - Weekly timetable
- `dashboardData.js` - Dashboard statistics

## 🎨 Key Features

### Responsive Design
- ✅ Mobile-first approach
- ✅ Collapsible sidebar on mobile
- ✅ Responsive tables and cards
- ✅ Adaptive layouts for all screen sizes

### UI/UX Features
- ✅ Clean, modern design
- ✅ Soft shadows and rounded corners
- ✅ Color-coded badges for status
- ✅ Interactive charts
- ✅ Search and filter functionality
- ✅ Modal dialogs
- ✅ Tab navigation

### Navigation
- ✅ Client-side routing
- ✅ Active link highlighting
- ✅ Breadcrumb-style navigation
- ✅ Smooth transitions

## 📝 How to Use

### View Different Pages
Click on the sidebar menu items:
- Dashboard
- Students
- Teachers
- Attendance
- Fees
- Exams
- Timetable

### Interact with Features
1. **Search Students**: Use search bar on Students page
2. **Filter**: Select class from dropdown
3. **View Profile**: Click "View" button on any student
4. **Navigate Tabs**: Click tabs on Student Profile page
5. **Change Date**: Use date picker on Attendance page
6. **View Charts**: Scroll down on Dashboard

## 🔄 Replace Hardcoded Data

To connect to a real backend, replace data imports:

```javascript
// Before (hardcoded):
import { studentsData } from '../data/studentsData';

// After (API):
const [students, setStudents] = useState([]);

useEffect(() => {
  fetch('https://your-api.com/students')
    .then(res => res.json())
    .then(data => setStudents(data));
}, []);
```

## 🎨 Customize Colors

Edit `tailwind.config.js` to change colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add more custom colors
    }
  }
}
```

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🐛 Troubleshooting

If you encounter issues:

1. **Port already in use**:
   ```bash
   # Kill the process on port 5173
   lsof -ti:5173 | xargs kill
   ```

2. **Dependencies not installed**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Styles not loading**:
   - Check that `tailwind.config.js` is present
   - Verify `@tailwind` directives are in `index.css`

## 📚 File Structure

```
src/
├── components/
│   ├── layout/         # Sidebar, Navbar, MainLayout
│   └── ui/             # Reusable components
├── pages/              # All page components
├── data/               # Hardcoded JSON data
├── lib/                # Utility functions
├── App.jsx             # Routes configuration
└── main.jsx            # Entry point
```

## 🎯 Next Steps

1. **Add Authentication**: Implement login/logout
2. **Connect Backend**: Replace data with API calls
3. **Add Forms**: Create/Edit functionality
4. **State Management**: Add Redux/Context API
5. **Testing**: Add unit and integration tests
6. **Deployment**: Deploy to Vercel/Netlify

## 💡 Tips

- All colors follow TailwindCSS classes
- Components are in `src/components/ui/`
- Pages use React Router for navigation
- Data is easily replaceable with API calls
- Mobile responsive by default

## 🤝 Need Help?

- Check `README_PROJECT.md` for detailed documentation
- Inspect components in `src/components/ui/`
- Review data structure in `src/data/`
- Examine page implementations in `src/pages/`

---

**Enjoy building with your School ERP System! 🎓**
