import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
import SignUp from '../pages/sign-up'
import ForgotPassword from '../pages/forgot-password'
import ResetPassword from '../pages/reset-password'
import Protected from './protected'
import RperList from '../pages/rper-list'
import Profile from '../pages/profile'
import Dashboard from '../pages/dashboard'
import Summary from '../pages/dashboard/summary'
import Team from '../pages/dashboard/team'
import SecondaryData from '../pages/dashboard/secondary-data'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<Protected />}>
          <Route path="/rper-list" element={<RperList />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<Dashboard />}>
            <Route path="/dashboard/summary/:id" element={<Summary />} />
            <Route path="/dashboard/team/:id" element={<Team />} />
            <Route
              path="/dashboard/secondary-data/:id"
              element={<SecondaryData />}
            />
            <Route
              path="/dashboard/contact-collectivity/:id"
              element={<ContactCollectivity />}
            />
            <Route
              path="/dashboard/interview-guide/:id"
              element={<InterviewGuide />}
            />
            <Route
              path="/dashboard/focus-group-guide/:id"
              element={<FocusGroupGuide />}
            />
            <Route
              path="/dashboard/themes-framework/:id"
              element={<ThemesFramework />}
            />
            <Route
              path="/dashboard/tasks-and-calendar/:id"
              element={<TasksAndCalendar />}
            />
            <Route
              path="/dashboard/collectivity-registration/:id"
              element={<CollectivityRegistration />}
            />
            <Route
              path="/dashboard/presentation/:id"
              element={<Presentation />}
            />
            <Route
              path="/dashboard/historical-mapping/:id"
              element={<HistoricalMapping />}
            />
            <Route
              path="/dashboard/transect-walk/:id"
              element={<TransectWalk />}
            />
            <Route
              path="/dashboard/venn-diagram'/:id"
              element={<VennDiagram />}
            />
            <Route
              path="/dashboard/seasonal-calendar/:id"
              element={<SeasonalCalendar />}
            />
            <Route
              path="/dashboard/daily-routines/:id"
              element={<DailyRoutines />}
            />
            <Route
              path="/dashboard/input-and-output/:id"
              element={<InputAndOutput />}
            />
            <Route
              path="/dashboard/interview-focus-group/:id"
              element={<InterviewFocusGroup />}
            />
            <Route
              path="/dashboard/reality-and-obj-Matrix/:id"
              element={<RealityAandObjMatrix />}
            />
            <Route
              path="/dashboard/election-of-priorities/:id"
              element={<ElectionOfPriorities />}
            />
            <Route
              path="/dashboard/extra-information/:id"
              element={<ExtraInformation />}
            />
            <Route
              path="/dashboard/final-considerations/:id"
              element={<FinalConsiderations />}
            />
            <Route
              path="/dashboard/acknoledgment/:id"
              element={<Acknoledgment />}
            />
            <Route
              path="/dashboard/generate-final-report/:id"
              element={<GenerateFinalReport />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
