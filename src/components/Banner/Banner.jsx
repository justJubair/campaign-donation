import './Banner.css'

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center banner md:h-[80vh]'>
      <h1 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h1>
    <div>
        <form className='flex items-center mt-5'>
            <input className='w-96 py-2 px-2 rounded-lg' type="text" name="search" id="search" placeholder="Search here..."/>
            <input className='btn bg-red-400 border-none text-white ml-4 hover:bg-red-700' type="submit" value="Search" />
        </form>
    </div>
    </div>
  )
}

export default Banner
