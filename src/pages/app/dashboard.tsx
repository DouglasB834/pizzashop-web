import { Helmet } from "react-helmet-async"

export const Dashboard = () =>    {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="p-8">
        <div className="w-[340px] flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight ">

            </h1>
            <p>
              Welcome to your dashboard
            </p>
          </div>
        </div>

      </div>
    </>
  )
}