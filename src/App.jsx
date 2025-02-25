import { users } from "./userProfile/userProfile";
import UserCard from "./userProfile/UserCard";

export default function App() {
  // console.log(users);
  return (
    <>
      <h1 className="text-4xl text-center bg-slate-100 p-10 ">
        NEXGEN NEXTOPIA
      </h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-center items-center  bg-gray-100"
        >
          <UserCard
            name={user.name}
            age={user.age}
            role={user.role}
            dept={user.dept}
            image={user.avatar}
            bio={user.bio}
          />
        </div>
      ))}
    </>
  );
}
