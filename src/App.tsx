export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50 p-6">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-600 text-white">KX</div>
          <h1 className="text-2xl font-semibold text-slate-900">KX + Vite + Tailwind</h1>
        </div>
        <p className="mb-6 text-slate-600">
          This React app is powered by Vite and styled with Tailwind CSS (latest). Edit
          <code className="mx-1 rounded bg-slate-100 px-1 py-0.5">src/App.tsx</code> and save to see HMR in action.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500"
            href="https://vitejs.dev/"
            target="_blank"
          >
            Vite Docs
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            href="https://react.dev/"
            target="_blank"
          >
            React Docs
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind Docs
          </a>
        </div>
      </div>
    </div>
  )
}
