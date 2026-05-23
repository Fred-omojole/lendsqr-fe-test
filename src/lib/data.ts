import { generateUsers } from "./mockData";
import { faker } from "@faker-js/faker";

faker.seed(42);
export const users = generateUsers(500);
