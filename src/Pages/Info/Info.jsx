import UserCard from "../../components/UserCard";

function Info () {

    const movies =  JSON.parse(window.localStorage.getItem("movies"));
   const user =  JSON.parse(window.localStorage.getItem("superappuser"));
 
return (
<h1>
    <UserCard />
    <p>{movies}</p>
    {user.Email}
</h1>
)
}

export default Info;