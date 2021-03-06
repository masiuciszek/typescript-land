const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

type D = typeof initialData;

const list = ["hello", "good bye"];
const list2 = ["hello", "good bye"];
const list3 = ["hello", "good bye"] as const;

type ListType = typeof list;
type ListType2 = typeof list2[number];
type ListType3 = typeof list3[number];

const countries = [
  {
    country: "pl",
    language: "Polish",
  },
  {
    country: "se",
    language: "Swedish",
  },
] as const;

type Country = typeof countries[number]["country"];
type CountryLang = typeof countries[number]["language"];

const currencySymbols = {
  GBP: "£",
  USD: "$",
  EUR: "€",
};

type Currency = typeof currencySymbols;
type Currency2 = keyof typeof currencySymbols;

const foo = ["text 1", "text 2"] as const;
// is the same as
// This will fail in React!!!
const bar = <const>["text 1", "text 2"];
