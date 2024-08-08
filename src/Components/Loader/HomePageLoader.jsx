import {  Vortex } from "react-loader-spinner"

const HomePageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
</div>
  )
}

export default HomePageLoader
