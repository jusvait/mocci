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
        <div className="flex-between">
          <h1><Link to={routes.home()}>MocciPlanner</Link></h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>Logout</button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MocciLayout
