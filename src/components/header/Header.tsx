import { logout } from "@/store/slices/UserSlice";
import { useDispatch } from "react-redux";

type User = {
  name: String;
  email: String;
};
type HeaderProps = {
  user: User;
};
export default function Header({ user }: HeaderProps) {
  const dispatch = useDispatch();
  return (
    <header className="bg-amber-200 p-3 flex justify-between">
      <h1 className="font-bold text-lg">Cream Pie</h1>
      <div className="flex items-center gap-5">
        <h1>Hello, {user.name}</h1>
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
