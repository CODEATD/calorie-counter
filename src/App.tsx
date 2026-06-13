import { useReducer, useEffect, useMemo, useRef } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer.ts";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker.tsx";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () =>
    useMemo(() => state.activities.length, [state.activities]);

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl w-[95%] mx-auto flex justify-between items-center">
          <h1 className="text-center md:text-lg text-sm font-bold text-white uppercase">
            Contador de Calorías
          </h1>

          <button
            className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-lime-500 md:py-20 py-16 px-5" ref={formRef}>
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto w-[95%]">
          <CalorieTracker activities={state.activities} />
        </div>
      </section>

      <section className="md:p-10 p-8 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
          formRef={formRef}
        />
      </section>
    </>
  );
}

export default App;
