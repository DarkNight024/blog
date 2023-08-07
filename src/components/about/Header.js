import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
function Header(){

    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12  max-w-full xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight pb-8 sm:text-7xl">
                    About Us
                </h1>
                <p className="mt-6 text-2xl leading-10 text-black max-w-5xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}
export default Header