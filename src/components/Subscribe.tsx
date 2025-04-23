

const Subscribe = () => {

  const handleSubscribe = () => {}

  return (
    <form
      action={handleSubscribe}
      className="flex flex-col md:flex-row
        w-full md:w-5/6 lg:w-3/5
        space-y-4 md:space-y-0
        items-center justify-between mx-auto
        bg-blue-200 text-black rounded-lg
        p-4 lg:p-6"
    >
      <h1 className="text-lg lg:text-xl font-semibold">Subscribe for updates</h1>
      <input
        type="text"
        placeholder="example@gmail.com"
        className="w-5/6 md:w-3/5 px-4 py-2 border broder-black" />
      <button
        type="submit"
        className="px-6 py-2 text-white text-sm md:text-lg font-medium
        bg-blue-400 hover:bg-blue-500 active:bg-blue-300 duration-150 ease-in-out"
      >
        Send
      </button>
    </form>
  )
}

export default Subscribe