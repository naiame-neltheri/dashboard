// import Home from './_components/home';

const Dashboard = () => {
  return(
    <div className="bg-slate-100 h-screen">
      <div className="container p-5">
        <div className="flex flex-row gap-3">
          <div className="basis-1/4">
            <div className="flex-col border-solid bg-white border-gray-100 rounded-md border border-slate-200 h-screen">
              <div className="flex justify-center">SIDEBAR</div>
              <div className="flex justify-center">test</div>
              <div className="flex justify-center">test</div>
            </div>
          </div>
          <div className="basis-3/4">
            <div className="w-full h-12 bg-white rounded-2xl text-center">
              <div className="align-start bg-gray-200 w-60 h-8 rounded-md">
                <a className="">SEARCH</a>
                <a className="">IMG</a>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              CONTENT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;