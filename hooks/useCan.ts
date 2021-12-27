import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContexts'
import { validateUserPermissions } from '../utils/validateUserPermissions'

type UseCanParams = {
  permissions?: string[]
  roles?: string[]
}

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticadted } = useContext(AuthContext)

  if (!isAuthenticadted) {
    return false
  }

  const userHasValidatePermissions = validateUserPermissions({
    user,
    permissions,
    roles
  })

  return userHasValidatePermissions
}
