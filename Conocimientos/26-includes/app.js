const allowedRoles = ['ADMIN', 'OPERATOR', 'BILLING'];

const userRole = 'operator';

/* if (allowedRoles.includes(userRole.toUpperCase())) {
  alert('Role allowed');
} else {
  alert('Role denied');
} */

/* allowedRoles.includes(userRole.toUpperCase())
  ? alert('Role allowed')
  : alert('Role denied');
 */

const isRoleAllowed = allowedRoles.includes(userRole.toUpperCase())
  ? true
  : false;

isRoleAllowed ? alert('Role allowed') : alert('Role denied');
