import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import routes from "@/router"

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={<route.element />} 
            />
          )
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
