import React, { useState } from 'react'

const orderHistory = [
  { id: 'SH-1109-P1', item: 'Heavy Machinery Parts • 420kg', date: 'Oct 24, 2023', amount: '$1,240.00', status: 'Delivered' },
  { id: 'SH-1108-A4', item: 'Electronic Components • 12kg', date: 'Oct 22, 2023', amount: '$85.20', status: 'Cancelled' },
  { id: 'SH-1099-M9', item: 'Medical Supplies • 85kg', date: 'Oct 18, 2023', amount: '$450.00', status: 'Delivered' },
  { id: 'SH-1082-Z2', item: 'Automotive Tools • 115kg', date: 'Oct 14, 2023', amount: '$2,100.00', status: 'Delivered' },
]

const networkHealth = [
  { label: 'Fleet Online', value: '94%' },
  { label: 'Carrier Capacity', value: '68%' },
  { label: 'Average TAT', value: '2.4h' },
]

const dispatchSummary = [
  { value: '14', label: 'Pending' },
  { value: '42', label: 'Active' },
  { value: '118', label: 'Completed' },
]

function MergedDashboardSection({ umbrellaLogo, onBack, onPlaceOrder, onViewAllHistory }) {
  const [viewMode, setViewMode] = useState('personal') // 'personal' or 'fleet'

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-xl border border-white/10 bg-[#05070d] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
      <header className="flex items-center justify-between border-b border-white/6 bg-black/35 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <button type="button" className="text-sm text-white/60">☰</button>
          <img src={umbrellaLogo} alt="Umbrela" className="h-5 w-auto md:h-6" />
        </div>

        <div className="flex items-center gap-4 text-xs text-white/50">
          <div className="flex bg-white/5 rounded-md p-1 mr-2">
            <button 
              onClick={() => setViewMode('personal')}
              className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider transition ${viewMode === 'personal' ? 'bg-[#7c9af2]/20 text-[#a7bbff]' : 'text-white/40'}`}
            >
              Personal
            </button>
            <button 
              onClick={() => setViewMode('fleet')}
              className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider transition ${viewMode === 'fleet' ? 'bg-[#7c9af2]/20 text-[#a7bbff]' : 'text-white/40'}`}
            >
              Fleet
            </button>
          </div>
          <span className="rounded bg-white/8 px-1.5 py-0.5 text-[10px]">USR</span>
          <button
            type="button"
            onClick={onBack}
            className="rounded border border-[#7c9af2]/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#a7bbff] hover:bg-[#7c9af2]/12"
          >
            Back
          </button>
        </div>
      </header>

      <div className="space-y-5 px-4 py-5 md:px-6 md:py-6">
        {viewMode === 'personal' ? (
          <>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div>
                <h1 className="text-4xl font-semibold text-white md:text-6xl">
                  UMBRELA <span className="text-[#7c9af2]">FLOW</span>
                </h1>
                <p className="mt-2 max-w-[600px] text-lg text-white/65">
                  Monitor, route, and deploy your assets with millisecond precision.
                </p>
                <button
                  type="button"
                  onClick={onPlaceOrder}
                  className="mt-5 rounded bg-[#8ea8ff] px-6 py-4 text-base font-semibold text-[#071327] shadow-[0_0_28px_rgba(124,154,242,0.4)] hover:bg-[#a2b8ff]"
                >
                  + Place New Order
                </button>
              </div>

              <div className="flex items-end justify-end">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Global Transit Time</p>
                  <p className="mt-1 text-6xl font-semibold text-[#9eb5ff]">
                    18.4<span className="text-3xl text-white/85">HRS</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_285px]">
              <div className="space-y-4">
                <article className="rounded-lg border border-white/10 bg-white/2 p-4 md:p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9eb5ff]">● Live Tracking</p>
                      <h2 className="mt-1 text-4xl font-semibold text-white">SH-9022-X7</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/45">ETA</p>
                      <p className="text-4xl font-semibold text-white/90">14:30 PM</p>
                    </div>
                  </div>

                  <div className="relative h-[220px] overflow-hidden rounded bg-[#081827]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_52%,rgba(181,239,255,0.35),transparent_16%),linear-gradient(150deg,#0a2032_0%,#091826_45%,#08101a_100%)]" />
                    <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(82,186,230,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(82,186,230,0.32)_1px,transparent_1px)] [background-size:34px_34px]" />
                    <div className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#9eb5ff] shadow-[0_0_10px_rgba(158,181,255,0.8)]" />
                  </div>
                </article>
                
                <article className="rounded-lg border border-white/10 bg-white/2 p-4 md:p-5">
                  <h3 className="text-xl font-semibold text-white/92 mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {networkHealth.slice(0, 2).map(metric => (
                      <div key={metric.label} className="rounded border border-white/8 bg-black/20 p-3">
                        <p className="text-[10px] uppercase tracking-wider text-white/40">{metric.label}</p>
                        <p className="text-2xl font-semibold text-white mt-1">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <aside className="space-y-4">
                <article className="rounded-lg border border-white/10 bg-white/2 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white/90">Recent Orders</h3>
                    <button onClick={onViewAllHistory} className="text-[10px] uppercase tracking-wider text-[#9bb2ff]">History</button>
                  </div>
                  <div className="space-y-2">
                    {orderHistory.slice(0, 3).map((order) => (
                      <div key={order.id} className="rounded border border-white/8 bg-black/20 p-3">
                        <div className="flex justify-between items-center">
                          <p className="text-xs font-semibold text-white">{order.id}</p>
                          <span className="text-[9px] uppercase bg-white/10 px-1.5 py-0.5 rounded text-white/60">{order.status}</span>
                        </div>
                        <p className="text-[10px] text-white/40 mt-1">{order.item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </aside>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/45">Operational Command</p>
                <h1 className="mt-1 text-3xl font-semibold leading-none text-white md:text-6xl">
                  Fleet <span className="text-[#7c9af2]">Intelligence</span>
                </h1>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="rounded-lg border border-white/10 bg-white/2 p-4 md:p-5">
                    <p className="text-xl font-semibold text-white mb-4">Network Health</p>
                    <div className="space-y-4">
                      {networkHealth.map((metric) => (
                        <div key={metric.label}>
                          <div className="flex items-center justify-between text-xs text-white/70">
                            <span>{metric.label}</span>
                            <span className="font-semibold text-white/90">{metric.value}</span>
                          </div>
                          <div className="mt-2 h-px w-full bg-white/12" />
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-lg border border-white/10 bg-white/2 p-4 md:p-5">
                    <p className="text-xl font-semibold text-white mb-4">Operations Summary</p>
                    <div className="grid grid-cols-1 gap-2">
                      {dispatchSummary.map((item) => (
                        <div key={item.label} className="flex justify-between items-center bg-black/20 border border-white/5 p-3 rounded-md">
                          <span className="text-xs text-white/50 uppercase tracking-widest">{item.label}</span>
                          <span className="text-2xl font-bold text-[#7c9af2]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>

                <article className="overflow-hidden rounded-lg border border-white/10 bg-[#070d1f] min-h-[300px] relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_65%,rgba(140,166,255,0.2),transparent_55%),linear-gradient(130deg,#080d1f_0%,#05070f_100%)]" />
                   <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(127,149,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(127,149,229,0.1)_1px,transparent_1px)] [background-size:32px_32px]" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-white/20 text-xs uppercase tracking-[0.4em]">Global Network Map Placeholder</p>
                   </div>
                </article>
              </div>

              <aside className="space-y-4">
                <article className="rounded-lg border border-[#7c9af2]/35 bg-linear-to-b from-[#101a34] to-[#0a101f] p-4">
                  <h3 className="text-xl font-semibold text-white/95">Management</h3>
                  <p className="mt-2 text-xs text-white/50">Access administrative tools and fleet controls.</p>
                  <button
                    type="button"
                    className="mt-5 w-full rounded bg-[#8ea8ff] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#08142c] hover:bg-[#a0b8ff]"
                  >
                    Dispatch Queue
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-full rounded border border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/70 hover:bg-white/5"
                  >
                    Carrier Registry
                  </button>
                </article>
              </aside>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default MergedDashboardSection
