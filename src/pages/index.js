import React, { lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar";

const Home = lazy(() => import('./home'));
const Detail = lazy(() => import('./detail'));

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Suspense fallback="">
            <Route path='/' component={Home} exact></Route>
            <Route path='/detail/:name' component={Detail} exact></Route>
        </Suspense>
    </Switch>
    </>
  );
}

export default App;
