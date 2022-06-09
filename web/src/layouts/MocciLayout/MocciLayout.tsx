type MocciLayoutProps = {
  children?: React.ReactNode
}

const MocciLayout = ({ children }: MocciLayoutProps) => {
  return (
    <>
      <header>
        <h1>Mocci</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MocciLayout
