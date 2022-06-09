import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type MocciLayoutProps = {
  children?: React.ReactNode
}

const MocciLayout = ({ children }: MocciLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div>
          <div className="grid place-items-center flex-wrap">
            <h1 className="bg-blue-400 p-1 w-fit rounded-md font-bold"><Link to={routes.home()}>MocciPlanner</Link></h1>
            <div className="flex">
              {isAuthenticated ? (
              <div>
                <span>{currentUser.email}</span>{' '}
                <button type="button" onClick={logOut}>Logout</button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MocciLayout
