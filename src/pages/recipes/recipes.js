const recipes = () => {
  return (
    <div className="relative flex flex-col min-h-screen p-3 font-light">
      <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 text-center rounded-lg">
        <div className="relative w-full inner">
          <div className="flex flex-col mb-8 rounded-sm bg-trans md:flex-row md:p-3 bg-trans-bg">
            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h2 className="mb-1 text-3xl font-bold text-white">Recipes</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recipes;
