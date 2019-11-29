import React from 'react'
import { Route, Link } from 'react-router-dom'


const User =({match}) => <p>{match.params.id}</p>


class Users extends React.Component {
  render() {

  const { url } = this.props.match


    return(
      <div>


<h1>Users Name is muthumani</h1>

<h2>The login Id is {url.id}  </h2>

<ul>
<li>
            <Link to="/users/1">User 1 </Link>
          </li>
          <li>
            <Link to="/users/2">User 2 </Link>
          </li>
          <li>
            <Link to="/users/3">User 3 </Link>
          </li>



</ul>

<Route path="/users/:id" component={User} />


</div>
)


  }
}
export default Users
