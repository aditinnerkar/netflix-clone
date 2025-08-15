import nflixlogo from '../assets/netflix_logo_icon.svg'
import netflixbg from "../assets/Netflix Indian Movies and Web Series.jpeg"

const Nav = () => {
    return(
        <>
            <div className="bg-black text-white justify-center bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${netflixbg})` }}>
                <div className='bg-gradient-to-t bg-cover bg-center from-black via-black/50 to-black min-h-screen'>
                    <div className="flex justify-between items-center px-74 py-4">
                        <div className="text-3xl font-bold text-red-600">
                            <img src={nflixlogo} alt="Logo" className="h-8" />
                        </div>
                        <div>
                            
                        </div>


                        <div className="flex justify-between">
                            <button className="text-gray px-3 py-1 text-xs font-light rounded-full">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav