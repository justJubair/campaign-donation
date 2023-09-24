import './Banner.css'

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center banner md:h-[80vh]'>
      <h1 className="text-2xl font-bold text-center">I Grow By Helping People In Need</h1>
    <div>
        <form>
            <input type="text" name="search" id="search" placeholder="Search here..."/>
            <input type="submit" value="Search" />
        </form>
    </div>
    </div>
  )
}

export default Banner
