import React from 'react';

// Assesment
const Login = React.lazy(() => import('./views/Login/Login'));
const Home = React.lazy(() => import('./views/Home/Home'));
const NotFound = React.lazy(() => import('./views/NotFound/NotFound'));

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const DashboardList = React.lazy(() => import('./views/Dashboard/DashboardDetail/ListDashboard'));

const Assesment = React.lazy(() => import('./views/Assesment/Assesment'));
const AssesmentSurvey = React.lazy(() => import('./views/Assesment/Survey/AssesmentSurvey'));
const AssesmentSurveyDetail = React.lazy(() => import('./views/Assesment/Survey/AssesmentSurveyDetail'));
const AssesmentSurveyResult = React.lazy(() => import('./views/Assesment/Survey/AssesmentSurveyResult'));
const AssesmentDocumentDetail = React.lazy(() => import('./views/Assesment/Survey/AssesmentSurveyDocumentDetail'));

const AssesmentFgd = React.lazy(() => import('./views/Assesment/Fgd/AssesmentFgd'));
const AssesmentFgdDetail = React.lazy(() => import('./views/Assesment/Fgd/AssesmentFgdDetail'));

const AssesmentObservasiReview = React.lazy(() => import('./views/Assesment/ObservasiReview/AssesmentObservasiReview'));
const AssesmentObservasiReviewDetail = React.lazy(() => import('./views/Assesment/ObservasiReview/AssesmentObservasiReviewDetail'));

const Manual = React.lazy(() => import('./views/Manual/Manual'));
const ManualDetail = React.lazy(() => import('./views/Manual/ManualDetail'));

//Settings
const AddUser = React.lazy(() => import('./views/Settings/User/AddUser'));

//Master
const Indicator = React.lazy(() => import('./views/Assesment/Master/Indicator/MasterIndicator'));
const Question = React.lazy(() => import('./views/Assesment/Master/Question/MasterQuestion'));
const DetailQuestion = React.lazy(() => import('./views/Assesment/Master/Question/Component/QuestionDetail'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/not-found', exact: true, name: NotFound },


  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/list', name: 'Corporate Risk Maturity', component: DashboardList },
  
  { path: '/manual', exact: true, name: 'Manual', component: Manual },
  { path: '/manual/how-to-use', exact: true, name: 'Manual How To Use', component: ManualDetail },
  { path: '/manual/survey', exact: true, name: 'Manual Survey', component: ManualDetail },
  { path: '/manual/document', exact: true, name: 'Manual Document', component: ManualDetail },

  { path: '/assesment', exact: true, name: 'Assesment', component: Assesment },
  { path: '/assesment/survey', exact: true, name: 'Assesment Survey', component: AssesmentSurvey },
  { path: '/assesment/survey/detail', exact: true, name: 'Assesment Survey Detail', component: AssesmentSurveyDetail },
  { path: '/assesment/survey/result', exact: true, name: 'Assesment Survey Result', component: AssesmentSurveyResult },
  { path: '/assesment/survey/document/question/:id', exact: true, name: 'Assesment Survey Document Detail', component: AssesmentDocumentDetail },


  { path: '/assesment/fgd', exact: true, name: 'Assesment Fgd', component: AssesmentFgd },
  { path: '/assesment/fgd/detail', exact: true, name: 'Assesment Fgd Detail', component: AssesmentFgdDetail },

  { path: '/assesment/observasi-review', exact: true, name: 'Assesment Observasi', component: AssesmentObservasiReview },
  { path: '/assesment/observasi-review/detail', exact: true, name: 'Assesment Observasi Detail', component: AssesmentObservasiReviewDetail },

  //Master
  {path: '/assesment/indicator', exact: true, name: 'Master Data Indikator', component: Indicator},
  {path: '/assesment/question', exact: true, name: 'Master Data Pertanyaan', component: Question},
  {path: '/assesment/question/detail/:id', exact: true, name: 'Detail Pertanyaan', component: DetailQuestion},

  {path: '/add-user', exact: true, name: 'Add User', component: AddUser,}
];

export default routes;
