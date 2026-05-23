import { User } from "@/types/user";

export function saveUser(user: User) {
  localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
}

export function getUser(userId: string): User | null {
  const userData = localStorage.getItem(`user_${userId}`);

  return userData ? JSON.parse(userData) : null;
}

// export function deleteUser(userId: string) {
//   localStorage.removeItem(`user_${userId}`);
// }
