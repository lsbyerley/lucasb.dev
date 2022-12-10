const Placeholders = ({ number }) => {
  const rows = [];
  for (let i = 0; i < number; i++) {
    rows.push(
      <div
        key={i}
        class="h-28 w-full max-w-xs rounded-lg bg-white p-4 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800"
      >
        <div class="flex animate-pulse space-x-4">
          <div class="h-10 w-10 rounded-full bg-slate-200"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 rounded bg-slate-200"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-slate-200"></div>
                <div class="col-span-1 h-2 rounded bg-slate-200"></div>
              </div>
              <div class="h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return rows;
};

export default Placeholders;
