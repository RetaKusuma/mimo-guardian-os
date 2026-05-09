import { Activity, BatteryCharging, Bell, Cpu, Database, Lock, Search, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { chartData, insights, metrics, runtimeLogs } from "@/components/data";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`glass rounded-3xl p-5 ${className}`}>{children}</section>;
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-6 text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-[250px_1fr] gap-5">
        <aside className="glass sticky top-6 h-[calc(100vh-48px)] rounded-3xl p-5">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 shadow-glow">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold">MiMo Guardian</h1>
              <p className="text-xs text-slate-400">AI Operating Layer</p>
            </div>
          </div>

          {[
            ["Command Center", Sparkles],
            ["Device Intelligence", Cpu],
            ["Battery Guardian", BatteryCharging],
            ["Notification AI", Bell],
            ["Memory Graph", Database],
            ["Smart Search", Search],
            ["Privacy Shield", Lock]
          ].map(([label, Icon]: any, idx) => (
            <div key={label} className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${idx === 0 ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-white/5"}`}>
              <Icon size={17} /> {label}
            </div>
          ))}
        </aside>

        <section className="space-y-5">
          <header className="glass rounded-3xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-2 text-sm text-blue-300">Xiaomi 14 Ultra · HyperOS · Connected</p>
                <h2 className="text-4xl font-black tracking-tight">Autonomous AI Control Center</h2>
                <p className="mt-2 max-w-2xl text-slate-300">
                  MiMo Guardian OS predicts device issues, orchestrates specialist agents, and safely executes optimization workflows.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 px-5 py-4 text-right">
                <p className="text-xs text-slate-400">Guardian Score</p>
                <p className="text-4xl font-black text-green-400">94</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-4 gap-4">
            {metrics.map((m) => (
              <Card key={m.name}>
                <p className="text-sm text-slate-400">{m.name}</p>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-black">{m.value}</span>
                  <span className="pb-1 text-sm text-slate-400">{m.suffix}</span>
                </div>
                <p className="mt-3 text-xs text-green-400">{m.trend}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-[1.25fr_.75fr] gap-5">
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Predictive Intelligence</h3>
                  <p className="text-sm text-slate-400">Optimization score and battery stability trend.</p>
                </div>
                <Activity className="text-blue-300" />
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="score" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2F6BFF" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2F6BFF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <Tooltip />
                    <Area type="monotone" dataKey="score" stroke="#60a5fa" fillOpacity={1} fill="url(#score)" />
                    <Area type="monotone" dataKey="battery" stroke="#22c55e" fillOpacity={0.1} fill="#22c55e" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h3 className="mb-4 text-xl font-bold">AI Recommendations</h3>
              <div className="space-y-3">
                {insights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    <Zap className="mb-2 text-amber-300" size={17} />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-[.9fr_1.1fr] gap-5">
            <Card>
              <h3 className="mb-3 text-xl font-bold">AI Command Center</h3>
              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-sm text-slate-300">User command</p>
                <p className="mt-2 text-2xl font-bold">“Optimize my phone for tonight.”</p>
              </div>
              <button className="mt-4 w-full rounded-2xl bg-blue-600 py-4 font-bold shadow-glow">Run Guardian Workflow</button>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/5 p-4">Safe cleanup</div>
                <div className="rounded-2xl bg-white/5 p-4">Smart charging</div>
                <div className="rounded-2xl bg-white/5 p-4">Focus mode</div>
                <div className="rounded-2xl bg-white/5 p-4">App throttling</div>
              </div>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold">Live Agent Runtime</h3>
              <div className="rounded-2xl bg-black/60 p-4 font-mono text-sm text-green-300">
                {runtimeLogs.map((log) => <p key={log} className="mb-1">{log}</p>)}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
