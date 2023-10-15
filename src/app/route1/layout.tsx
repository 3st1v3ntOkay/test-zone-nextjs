
const RouteLayout = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <>
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="../../" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
    </>
  )
}

export default RouteLayout