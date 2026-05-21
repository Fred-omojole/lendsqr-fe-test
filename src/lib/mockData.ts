import { User } from "@/types/user";
import { faker } from "@faker-js/faker";

export function generateUsers(): User[] {
  return [
    {
      id: faker.string.uuid(),
      orgName: faker.company.name(),
      userName: faker.internet.username(),
      fullName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      bvn: faker.string.numeric(11),
      gender: faker.person.sexType(),
      maritalStatus: faker.helpers.arrayElement([
        "Single",
        "Married",
        "Divorced",
      ]),
      children: faker.number.int({ min: 0, max: 5 }),
      typeOfResidence: faker.helpers.arrayElement([
        "Owned",
        "Rented",
        "Parent's Apartment",
      ]),
      dateJoined: faker.date.past().toISOString(),
      status: faker.helpers.arrayElement([
        "active",
        "inactive",
        "pending",
        "blacklisted",
      ]),

      levelOfEducation: faker.helpers.arrayElement([
        "B.Sc",
        "M.Sc",
        "Ph.D",
        "High School",
      ]),
      employmentStatus: faker.helpers.arrayElement([
        "Employed",
        "Unemployed",
        "Self-employed",
      ]),
      sectorOfEmployment: faker.helpers.arrayElement([
        "Technology",
        "Fintech",
        "Healthcare",
        "Education",
      ]),
      durationOfEmployment: faker.helpers.arrayElement([
        "1 year",
        "2 years",
        "3years",
      ]),
      officeEmail: faker.internet.email(),
      monthlyIncome: faker.finance.amount({ min: 50000, max: 500000, dec: 0 }),
      loanRepayment: faker.finance.amount({ min: 5000, max: 100000, dec: 0 }),

      twitter: `@${faker.internet.username()}`,
      facebook: faker.person.fullName(),
      instagram: `@${faker.internet.username()}`,

      guarantors: faker.helpers.arrayElements(
        [
          {
            id: faker.string.uuid(),
            fullName: faker.person.fullName(),
            phoneNumber: faker.phone.number(),
            email: faker.internet.email(),
            relationship: faker.helpers.arrayElement([
              "Sister",
              "Brother",
              "Friend",
              "Spouse",
            ]),
          },
        ],
        { min: 0, max: 2 },
      ),
    },
  ];
}
