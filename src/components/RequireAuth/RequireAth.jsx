import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
function RequireAth({ children }) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const auth = useSelector((s) => s.user)
  const location = useLocation()

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default RequireAth
