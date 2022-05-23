// import Home from './_components/home';
const Dashboard = () => {
  const data ={
  labels : ["January", "February", "March", "April", "May", "June"],
  datasets: [
      {
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return(
    <div className="h-screen bg-slate-100">
      <div className="p-5">
        <div className="flex flex-row gap-3">
          <div className="text-2xl basis-1/5">
            <div className="flex-col h-screen uppercase bg-white border border-solid rounded-2xl border-slate-200">
              <div className="flex justify-center h-16 cursor-pointer mt-60 hover:text-blue-700">
                SIDEBAR
              </div>
              <div className="flex justify-center h-16 cursor-pointer hover:text-blue-700">
                test
              </div>
              <div className="flex justify-center h-16 cursor-pointer hover:text-blue-700">
                test
              </div>
            </div>
          </div>
          <div className="basis-4/5">
            <div className="h-screen bg-white border border-solid rounded-2xl border-slate-200">
              <div className="p-5 text-xl text-bold">Dashboard</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}

export default Dashboard;